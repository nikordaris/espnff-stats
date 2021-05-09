import { Client, Boxscore } from 'espn-fantasy-football-api/node';

const ESPN_S2 = process.env.ESPN_S2;
const SWID = process.env.SWID;
const LEAGUE_ID = process.env.LEAGUE_ID;
const SEASON_ID = Number(process.env.SEASON_ID || new Date().getFullYear());

export async function handler(event: any, context: any) {
  const seasonId = SEASON_ID;
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
  return { seasonId, leagueInfo, teamsBoxscores };
}

handler(null, null);
