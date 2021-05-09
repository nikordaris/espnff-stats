export default Client;
/**
 * Provides functionality to make a variety of API calls to ESPN for a given fantasy football
 * league. This class should be used by consuming projects.
 *
 * @class
 */
declare class Client {
    static _buildRoute({ base, params }: {
        base: any;
        params: any;
    }): string;
    constructor(options?: {});
    leagueId: any;
    /**
     * Set cookies from ESPN for interacting with private leagues in NodeJS. Both cookie smust be
     * provided to be set. See the README for instructions on how to find these cookies.
     *
     * @param {object} options Required options object.
     * @param {string} options.espnS2 The value of the `espn_s2` cookie key:value pair to auth with.
     * @param {string} options.SWID The value of the `SWID` cookie key:value pair to auth with.
     */
    setCookies({ espnS2, SWID }: {
        espnS2: string;
        SWID: string;
    }): void;
    espnS2: string;
    SWID: string;
    /**
     * Returns all boxscores for a week.
     *
     * NOTE: Due to the way ESPN populates data, both the `scoringPeriodId` and `matchupPeriodId` are
     * required and must correspond with each other correctly.
     *
     * @param  {object} options Required options object.
     * @param  {number} options.seasonId The season in which the boxscore occurs.
     * @param  {number} options.matchupPeriodId The matchup period in which the boxscore occurs.
     * @param  {number} options.scoringPeriodId The scoring period in which the boxscore occurs.
     * @returns {Boxscore[]} All boxscores for the week
     */
    getBoxscoreForWeek({ seasonId, matchupPeriodId, scoringPeriodId }: {
        seasonId: number;
        matchupPeriodId: number;
        scoringPeriodId: number;
    }): Boxscore[];
    /**
     * Returns boxscores WITHOUT ROSTERS for PREVIOUS seasons. Useful for pulling historical
     * scoreboards.
     *
     * NOTE: This route will error for the current season, as ESPN only exposes this data for previous
     * seasons.
     *
     * NOTE: Due to the way ESPN populates data, both the `scoringPeriodId` and `matchupPeriodId` are
     * required and must correspond with each other correctly.
     *
     * @param  {object} options Required options object.
     * @param  {number} options.seasonId The season in which the boxscore occurs.
     * @param  {number} options.matchupPeriodId The matchup period in which the boxscore occurs.
     * @param  {number} options.scoringPeriodId The scoring period in which the boxscore occurs.
     * @returns {Boxscore[]} All boxscores for the week
     */
    getHistoricalScoreboardForWeek({ seasonId, matchupPeriodId, scoringPeriodId }: {
        seasonId: number;
        matchupPeriodId: number;
        scoringPeriodId: number;
    }): Boxscore[];
    /**
     * Returns all free agents (in terms of the league's rosters) for a given week.
     *
     * NOTE: `scoringPeriodId` of 0 corresponds to the preseason; `18` for after the season ends.
     *
     * @param  {object} options Required options object.
     * @param  {number} options.seasonId The season to grab data from.
     * @param  {number} options.scoringPeriodId The scoring period to grab free agents from.
     * @returns {FreeAgentPlayer[]} The list of free agents.
     */
    getFreeAgents({ seasonId, scoringPeriodId }: {
        seasonId: number;
        scoringPeriodId: number;
    }): FreeAgentPlayer[];
    /**
     * Returns an array of Team object representing each fantasy football team in the FF league.
     *
     * @param  {object} options Required options object.
     * @param  {number} options.seasonId The season to grab data from.
     * @param  {number} options.scoringPeriodId The scoring period in which to grab teams from.
     * @returns {Team[]} The list of teams.
     */
    getTeamsAtWeek({ seasonId, scoringPeriodId }: {
        seasonId: number;
        scoringPeriodId: number;
    }): Team[];
    /**
     * Returns all NFL games that occur in the passed timeframe. NOTE: Date format must be "YYYYMMDD".
     *
     * @param  {object} options Required options object.
     * @param  {string} options.startDate Must be in "YYYYMMDD" format.
     * @param  {string} options.endDate   Must be in "YYYYMMDD" format.
     * @returns {NFLGame[]} The list of NFL games.
     */
    getNFLGamesForPeriod({ startDate, endDate }: {
        startDate: string;
        endDate: string;
    }): NFLGame[];
    /**
     * Returns info on an ESPN fantasy football league
     *
     * @param   {object} options Required options object.
     * @param   {number} options.seasonId The season to grab data from.
     * @returns {League} The league info.
     */
    getLeagueInfo({ seasonId }: {
        seasonId: number;
    }): League;
    /**
     * Correctly builds an axios config with cookies, if set on the instance
     *
     * @param   {object} config An axios config.
     * @returns {object} An axios config with cookies added if set on instance
     * @private
     */
    private _buildAxiosConfig;
}
import Boxscore from "../boxscore/boxscore";
import FreeAgentPlayer from "../free-agent-player/free-agent-player";
import Team from "../team/team";
import NFLGame from "../nfl-game/nfl-game";
import League from "../league/league";
