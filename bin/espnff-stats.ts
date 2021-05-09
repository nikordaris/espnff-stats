#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ExtractEspnffStatsConstruct } from '../lib/espnff-stats-extract';
import { envSpecific, deployEnv } from '../lib/envTools';

class ProdExtractEspnffStatsStack extends cdk.Stack {
  constructor(scope: cdk.Construct, props?: cdk.StackProps) {
    super(scope, envSpecific('ExtractEspnffStatsStack'), props);
    new ExtractEspnffStatsConstruct(
      scope,
      envSpecific('ExtractEspnffStatsStack'),
      {
        ffESPNS2: process.env.ESPN_S2,
        ffSWID: process.env.SWID,
      },
    );
  }
}

class DevExtractEspnffStatsStack extends cdk.Stack {
  constructor(scope: cdk.Construct, props?: cdk.StackProps) {
    super(scope, envSpecific('ExtractEspnffStatsStack'), props);
    new ExtractEspnffStatsConstruct(
      scope,
      envSpecific('ExtractEspnffStatsStack'),
      {
        ffESPNS2: process.env.ESPN_S2,
        ffSWID: process.env.SWID,
      },
    );
  }
}

const app = new cdk.App();

if (['prod', 'demo'].includes(deployEnv())) {
  new ProdExtractEspnffStatsStack(app, {
    env: {
      account: process.env.CDK_ACCOUNT,
      region: process.env.CDK_REGION,
    },
  });
} else {
  new DevExtractEspnffStatsStack(app, {
    env: {
      account: process.env.CDK_ACCOUNT,
      region: process.env.CDK_REGION,
    },
  });
}
