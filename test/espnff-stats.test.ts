import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as ExtractEspnffStats from '../lib/espnff-stats-extract';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new ExtractEspnffStats.ExtractEspnffStatsStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
