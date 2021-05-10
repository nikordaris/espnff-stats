import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ExtractEspnffStatsConstruct } from '../lib/espnff-stats-extract';
import { envSpecific } from '../lib/envTools';

export class DevExtractEspnffStatsStack extends cdk.Stack {
  constructor(scope: cdk.Construct, props?: cdk.StackProps) {
    super(scope, envSpecific('ExtractEspnffStatsStack'), props);
    new ExtractEspnffStatsConstruct(
      this,
      envSpecific(ExtractEspnffStatsConstruct),
      {
        ffESPNS2: process.env.ESPN_S2,
        ffSWID: process.env.SWID,
      },
    );
  }
}
