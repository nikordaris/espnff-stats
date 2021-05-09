import * as lambda from '@aws-cdk/aws-lambda';
import * as targets from '@aws-cdk/aws-events-targets';
import * as cdk from '@aws-cdk/core';
import * as events from '@aws-cdk/aws-events';

export class ExtractEspnffStatsStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const lambdaFn = new lambda.Function(this, 'ExtractEspnffStats', {
      code: lambda.Code.fromAsset('src/espnff-stats-extract'),
      handler: 'index.handler',
      timeout: cdk.Duration.seconds(300),
      runtime: lambda.Runtime.NODEJS_12_X,
    });

    // See https://docs.aws.amazon.com/lambda/latest/dg/tutorial-scheduled-events-schedule-expressions.html
    const rule = new events.Rule(this, 'Rule', {
      schedule: events.Schedule.cron({
        hour: '6',
        month: '9-12',
        weekDay: '4',
      }),
    });

    rule.addTarget(new targets.LambdaFunction(lambdaFn));
  }
}
