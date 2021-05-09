export default Team;
/**
 * ~TeamMap
 */
export type Team = {
    /**
     * The id of the team in the ESPN universe.
     */
    id: number;
    /**
     * The team's abbreviation.
     */
    abbreviation: string;
    /**
     * The team's name.
     */
    name: string;
    /**
     * The URL for the team's uploaded logo.
     */
    logoURL: string;
    /**
     * The team's position in the current wavier order.
     */
    wavierRank: number;
    /**
     * The team's roster of players.
     */
    roster: Player[];
    /**
     * The number of regular season match-ups the team has won.
     */
    wins: number;
    /**
     * The number of regular season match-ups the team has lost.
     */
    losses: number;
    /**
     * The number of regular season match-ups the team has tied.
     */
    ties: number;
    /**
     * The number of regular season match-ups the team has won in the
     * division.
     */
    divisionWins: number;
    /**
     * The number of regular season match-ups the team has lost in
     * the division.
     */
    divisionLosses: number;
    /**
     * The number of regular season match-ups the team has tied in the
     * division.
     */
    divisionTies: number;
    /**
     * The number of regular season match-ups the team has won at home.
     */
    homeWins: number;
    /**
     * The number of regular season match-ups the team has lost at home.
     */
    homeLosses: number;
    /**
     * The number of regular season match-ups the team has tied at home.
     */
    homeTies: number;
    /**
     * The number of regular season match-ups the team has won away.
     */
    awayWins: number;
    /**
     * The number of regular season match-ups the team has lost away.
     */
    awayLosses: number;
    /**
     * The number of regular season match-ups the team has tied away.
     */
    awayTies: number;
    /**
     * The total points scored by the team in the regular season
     * and playoffs combined.
     */
    totalPointsScored: number;
    /**
     * The total points scored by the team in the regular
     * season.
     */
    regularSeasonPointsFor: number;
    /**
     * The total points scored against the team in the
     * regular season.
     */
    regularSeasonPointsAgainst: number;
    /**
     * The percentage of games won by the team in the regular
     * season.
     */
    winningPercentage: number;
    /**
     * The seeding for the team entering the playoffs.
     */
    playoffSeed: number;
    /**
     * The final standings position the team ended the
     * season in.
     */
    finalStandingsPosition: number;
};
/**
 * Represents a fantasy football team in a league.
 *
 * @augments {BaseCacheableObject}
 */
declare class Team extends BaseCacheableObject {
    /**
     * Returns valid id params when 'id', `leagueId`, and 'seasonId' are passed.
     *
     * @param   {object} params The params to use.
     * @returns {object|undefined} An object containing the params, or `undefined`.
     */
    static getIDParams(params?: object): object | undefined;
    /**
     * @typedef  {object} Team~TeamMap
     *
     * @property {number} id The id of the team in the ESPN universe.
     * @property {string} abbreviation The team's abbreviation.
     * @property {string} name The team's name.
     * @property {string} logoURL The URL for the team's uploaded logo.
     * @property {number} wavierRank The team's position in the current wavier order.
     *
     * @property {Player[]} roster The team's roster of players.
     *
     * @property {number} wins The number of regular season match-ups the team has won.
     * @property {number} losses The number of regular season match-ups the team has lost.
     * @property {number} ties The number of regular season match-ups the team has tied.
     * @property {number} divisionWins The number of regular season match-ups the team has won in the
     *                                 division.
     * @property {number} divisionLosses The number of regular season match-ups the team has lost in
     *                                   the division.
     * @property {number} divisionTies The number of regular season match-ups the team has tied in the
     *                                 division.
     * @property {number} homeWins The number of regular season match-ups the team has won at home.
     * @property {number} homeLosses The number of regular season match-ups the team has lost at home.
     * @property {number} homeTies The number of regular season match-ups the team has tied at home.
     * @property {number} awayWins The number of regular season match-ups the team has won away.
     * @property {number} awayLosses The number of regular season match-ups the team has lost away.
     * @property {number} awayTies The number of regular season match-ups the team has tied away.
     *
     * @property {number} totalPointsScored The total points scored by the team in the regular season
     *                                      and playoffs combined.
     * @property {number} regularSeasonPointsFor The total points scored by the team in the regular
     *                                           season.
     * @property {number} regularSeasonPointsAgainst The total points scored against the team in the
     *                                               regular season.
     * @property {number} winningPercentage The percentage of games won by the team in the regular
     *                                      season.
     *
     * @property {number} playoffSeed The seeding for the team entering the playoffs.
     * @property {number} finalStandingsPosition The final standings position the team ended the
     *                                           season in.
     */
    /**
     * @type {Team~TeamMap}
     */
    static responseMap: Team;
    constructor(options?: {});
    leagueId: any;
    seasonId: any;
}
import Player from "../player/player";
import BaseCacheableObject from "../base-classes/base-cacheable-object/base-cacheable-object.js";
