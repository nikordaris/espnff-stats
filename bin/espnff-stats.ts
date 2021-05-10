#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { deployEnv } from '../lib/envTools';
import { ProdExtractEspnffStatsStack } from './prod-espnff-stats-stacks';
import { DevExtractEspnffStatsStack } from './dev-espnff-stats-stacks';

require('dotenv').config();

const app = new cdk.App();

if (['prod', 'demo'].includes(deployEnv())) {
  new ProdExtractEspnffStatsStack(app, {
    env: {
      account: process.env.AWS_ACCOUNT_NUMBER,
      region: process.env.AWS_REGION,
    },
  });
} else {
  new DevExtractEspnffStatsStack(app, {
    env: {
      account: process.env.AWS_ACCOUNT_NUMBER,
      region: process.env.AWS_REGION,
    },
  });
}
