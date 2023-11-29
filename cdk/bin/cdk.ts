#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { CdkStack } from "../lib/cdk-stack";

const app = new cdk.App();
new CdkStack(app, "PortfolioContact", {
  corsAllowHeader: "https://mattrigg.dev",
  env: {
    region: "us-west-2",
  },
});
