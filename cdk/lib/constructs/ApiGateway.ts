import * as apigateway from "aws-cdk-lib/aws-apigateway";
import { Construct } from "constructs";

/**
 * API Gateway
 *  In this set up we are using the default stage - 'dev' and an additional stage - 'live'
 *
 * More Info on API Gateway Stages Deployment Issue:
 *  - https://repost.aws/questions/QUAH1opLNSQVWFFnKpF-1ZTQ/the-problem-of-updating-the-apigateway-stage-in-aws-cdk
 *  - https://github.com/aws/aws-cdk/issues/13526
 */
export class ApiGateway extends Construct {
  public readonly IRestApi: apigateway.IRestApi;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    /**
     * API Gateway Instance with default stage - 'dev'
     */
    const endpointsGateway = new apigateway.RestApi(this, "ApiGateway", {
      restApiName: "PortfolioContact",
      description: "Endpoint for Portfolio Contact Form",
      endpointConfiguration: {
        types: [apigateway.EndpointType.REGIONAL], // Required to map to a custom domain name
      },
      cloudWatchRole: true,
      deploy: true,
      deployOptions: {
        stageName: "prod", // Default Stage
        description: "Portfolio Contact Form - Prod stage",
        dataTraceEnabled: true,
        metricsEnabled: true,
        tracingEnabled: false, // Disable X-ray tracing
        loggingLevel: apigateway.MethodLoggingLevel.INFO,
      },
    });

    /**
     * Default Responses for API Gateway
     */
    // 4xx response - default
    endpointsGateway.addGatewayResponse("4xxGatewayResponse", {
      type: apigateway.ResponseType.DEFAULT_4XX,
      templates: {
        "application/json":
          '{ "message": "Bad request", "statusCode": "400", "type": "$context.error.responseType" }',
      },
    });

    // Access Denied Response
    endpointsGateway.addGatewayResponse("403GatewayResponse", {
      type: apigateway.ResponseType.ACCESS_DENIED,
      statusCode: "401",
      templates: {
        "application/json":
          '{ "message": "Access Denied", "statusCode": "401", "type": "$context.error.responseType" }',
      },
    });

    // Access Denied Response
    endpointsGateway.addGatewayResponse("500GatewayResponse", {
      type: apigateway.ResponseType.DEFAULT_5XX,
      statusCode: "401",
      templates: {
        "application/json":
          '{ "message": "Internal server error", "statusCode": "500", "type": "$context.error.responseType" }',
      },
    });

    this.IRestApi = endpointsGateway;
  }
}
