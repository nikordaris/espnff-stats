export default NFLGame;
/**
 * ~NFLTeam
 */
export type NFLGame = {
    /**
     * The id of the NFL team in the ESPN universe.
     */
    id: number;
    /**
     * The name of the NFL team.
     */
    team: string;
    /**
     * The name abbreviation of the NFL team.
     */
    teamAbbrev: string;
    /**
     * The win/loss/tie record of the NFL team.
     */
    record: string;
    /**
     * The score of the NFL team in the game.
     */
    score: number;
};
/**
 * Represents an NFL game between two NFL teams.
 *
 * @augments {BaseObject}
 */
declare class NFLGame extends BaseObject {
    static GAME_STATUSES: {
        pre: string;
        in: string;
        post: string;
    };
    /**
     * @typedef {object} NFLGame~NFLTeam
     *
     * @property {number} id The id of the NFL team in the ESPN universe.
     * @property {string} team The name of the NFL team.
     * @property {string} teamAbbrev The name abbreviation of the NFL team.
     * @property {string} record The win/loss/tie record of the NFL team.
     * @property {number} score The score of the NFL team in the game.
     */
    /**
     * @typedef {object} NFLGame~NFLGameMap
     *
     * @property {Date} startTime The date and time when the game starts in Eastern Time.
     * @property {number} quarter The quarter the game is in.
     * @property {string} clock The current game clock formatted as MM:SS.
     * @property {string} odds The odds for the game formatted as "TEAM_ABBREV LINE"
     * @property {string} broadcaster Who is broadcasting the game on TV.
     *
     * @property {string} gameStatus Whether or not the game has not started, is in progress, or has
     *                               finished.
     * @property {NFLGame~NFLTeam} homeTeam The home team in the game.
     * @property {NFLGame~NFLTeam} awayTeam The away team in the game.
     */
    /**
     * @type {NFLGame~NFLGameMap}
     */
    static responseMap: NFLGame;
    static _buildTeamAttribute(teamResponseData: any): {
        id: any;
        team: any;
        teamAbbrev: any;
        record: any;
        score: any;
    };
}
import BaseObject from "../base-classes/base-object/base-object";
