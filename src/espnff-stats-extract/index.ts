import { S3 } from 'aws-sdk';
import { Client, Boxscore } from 'espn-fantasy-football-api/node';

const ESPN_S2 = process.env.ESPN_S2;
const SWID = process.env.SWID;
const LEAGUE_ID = process.env.LEAGUE_ID;
const SEASON_ID = Number(process.env.SEASON_ID || new Date().getFullYear());
const BUCKET_NAME = process.env.BUCKET_NAME;

export async function handler(event: any, context: any) {
  const seasonId = SEASON_ID;
  const s3Client = new S3();

  const myClient = new Client({ leagueId: LEAGUE_ID });
  if (ESPN_S2 && SWID) {
    myClient.setCookies({ espnS2: ESPN_S2, SWID: SWID });
  }
  const leagueInfo = await myClient.getLeagueInfo({
    seasonId,
  });
  const numberOfRegularSeasonMatchups =
    leagueInfo.scheduleSettings.numberOfRegularSeasonMatchups;
  const teamsBoxscores = await Promise.all(
    Array(numberOfRegularSeasonMatchups)
      .fill(0)
      .map(async (_, i) => {
        const scoringPeriodId = i + 1;
        const matchupPeriodId = scoringPeriodId;
        let boxscore = undefined;
        try {
          boxscore = await myClient.getHistoricalScoreboardForWeek({
            seasonId,
            matchupPeriodId,
            scoringPeriodId,
          });
        } catch (ex) {
          boxscore = await myClient.getBoxscoreForWeek({
            seasonId,
            matchupPeriodId,
            scoringPeriodId,
          });
          boxscore = boxscore.map((obj: Boxscore) => ({
            homeScore: obj.homeScore,
            homeTeamId: obj.homeTeamId,
            awayScore: obj.awayScore,
            awayTeamId: obj.awayTeamId,
          }));
        }
        const teams = await myClient.getTeamsAtWeek({
          seasonId,
          scoringPeriodId,
        });
        return { scoringPeriodId, teams, boxscore };
      }),
  );
  const stats = { seasonId, leagueInfo, teamsBoxscores };
  if (BUCKET_NAME && LEAGUE_ID && SEASON_ID) {
    try {
      const data = await s3Client
        .upload({
          Bucket: BUCKET_NAME,
          Key: `${LEAGUE_ID}/${SEASON_ID}-stats.json`,
          Body: JSON.stringify(stats),
          ContentType: 'application/json',
        })
        .promise();
      console.log('Upload Success', data.Location);
    } catch (err) {
      console.log('Error', err);
    }
  }
}

handler(null, null);
