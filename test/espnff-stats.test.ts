import {
  expect as expectCDK,
  matchTemplate,
  MatchStyle,
} from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as ExtractEspnffStats from '../lib/espnff-stats-extract';

test('Empty Construct', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new ExtractEspnffStats.ExtractEspnffStatsConstruct(
    app,
    'MyTestConstruct',
  );
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        Resources: {},
      },
      MatchStyle.EXACT,
    ),
  );
});
