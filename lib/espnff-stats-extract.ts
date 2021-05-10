import * as lambda from '@aws-cdk/aws-lambda';
import * as targets from '@aws-cdk/aws-events-targets';
import * as cdk from '@aws-cdk/core';
import * as events from '@aws-cdk/aws-events';
import * as s3 from '@aws-cdk/aws-s3';

interface ExtractEspnffStatsProps {
  bucketName: string;
  cronOptions?: events.CronOptions;
  lambdaTimeout?: cdk.Duration;
  ffLeagueId?: string;
  ffSeasonId?: string;
  ffESPNS2?: string;
  ffSWID?: string;
}

const DefaultProps = {
  cronOptions: {
    hour: '6',
    month: '9-12',
    weekDay: '4',
  },
  lambdaTimeout: cdk.Duration.seconds(300),
  ffLeagueId: '',
  ffSeasonId: '',
  ffESPNS2: '',
  ffSWID: '',
};
export class ExtractEspnffStatsConstruct extends cdk.Construct {
  constructor(
    scope: cdk.Construct,
    id: string,
    props?: ExtractEspnffStatsProps,
  ) {
    super(scope, id);
    const options = { ...DefaultProps, ...props };

    const bucket = new s3.Bucket(this, 'ExtractEspnffStatsStore', {
      bucketName: options.bucketName,
    });

    const lambdaFn = new lambda.Function(this, 'ExtractEspnffStats', {
      code: lambda.Code.fromAsset('src/espnff-stats-extract'),
      handler: 'index.handler',
      timeout: options.lambdaTimeout,
      runtime: lambda.Runtime.NODEJS_12_X,
      environment: {
        ESPN_S2: options.ffESPNS2,
        SWID: options.ffSWID,
        LEAGUE_ID: options.ffLeagueId,
        SEASON_ID: options.ffSeasonId,
        BUCKET_NAME: bucket.bucketName,
      },
    });

    // See https://docs.aws.amazon.com/lambda/latest/dg/tutorial-scheduled-events-schedule-expressions.html
    const rule = new events.Rule(this, 'Rule', {
      schedule: events.Schedule.cron(options.cronOptions),
    });

    rule.addTarget(new targets.LambdaFunction(lambdaFn));
  }
}
