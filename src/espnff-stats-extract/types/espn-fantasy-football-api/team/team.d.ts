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

import Player from '../player/player';
