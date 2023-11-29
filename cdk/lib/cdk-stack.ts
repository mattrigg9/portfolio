import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as iam from "aws-cdk-lib/aws-iam";
import { ApiGateway } from "./constructs/ApiGateway";
import { jsonRequestTemplate } from "./constants/sesRequestTemplate";

interface CdkStackProps extends cdk.StackProps {
  corsAllowHeader?: string;
}

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: CdkStackProps) {
    super(scope, id, props);

    // Set up a role for SES integration
    const sesIntegrationRole = new iam.Role(this, "SESServiceRole", {
      assumedBy: new iam.ServicePrincipal("apigateway.amazonaws.com"),
    });

    sesIntegrationRole.addToPolicy(
      new iam.PolicyStatement({
        resources: ["*"],
        actions: ["ses:SendEmail"],
      }),
    );

    const defaultResponseParameters = {
      "method.response.header.Access-Control-Allow-Origin": props.corsAllowHeader
        ? `'${props.corsAllowHeader}'`
        : "'*'",
    };

    // Docs: https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_apigateway.AwsIntegrationProps.html
    const sesIntegration = new apigateway.AwsIntegration({
      service: "email", // This is the SES service name
      action: "SendEmail",
      integrationHttpMethod: "POST",
      options: {
        credentialsRole: sesIntegrationRole,
        passthroughBehavior: apigateway.PassthroughBehavior.WHEN_NO_TEMPLATES,
        requestParameters: {
          "integration.request.header.Content-Type": "'application/x-www-form-urlencoded'",
        },
        requestTemplates: {
          "application/json": jsonRequestTemplate,
        },
        integrationResponses: [
          {
            statusCode: "200",
            selectionPattern: "2\\d{2}",
            responseTemplates: {
              "application/json": '{"message": "Success"}',
            },
            responseParameters: defaultResponseParameters,
          },
          {
            statusCode: "400",
            selectionPattern: "4\\d{2}",
            responseTemplates: {
              "application/json": '{"message": "Bad request"}',
            },
            responseParameters: defaultResponseParameters,
          },
          {
            statusCode: "500",
            selectionPattern: "5\\d{2}",
            responseTemplates: {
              "application/json": '{"message": "Internal server error"}',
            },
            responseParameters: defaultResponseParameters,
          },
        ],
      },
    });

    const apiGateway = new ApiGateway(this, "ApiGateway");

    // Contact Endpoint - POST /
    const rootResource = apiGateway.IRestApi.root;
    rootResource.addMethod("POST", sesIntegration, {
      methodResponses: [200, 400, 500].map((statusCode) => ({
        statusCode: statusCode.toString(),
        responseParameters: {
          "method.response.header.Access-Control-Allow-Headers": true,
          "method.response.header.Access-Control-Allow-Credentials": true,
          "method.response.header.Access-Control-Allow-Origin": true,
        },
      })),
    });

    // Enable OPTIONS preflight method
    rootResource.addCorsPreflight({
      allowOrigins: [props.corsAllowHeader ?? "*"],
      allowMethods: ["POST", "OPTIONS"],
    });
  }
}
