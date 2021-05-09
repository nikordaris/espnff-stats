export default Boxscore;
/**
 * ~BoxscoreMap
 */
export type Boxscore = {
  /**
   * The total points scored by the home team.
   */
  homeScore: number;
  /**
   * The home team's id. Can be used to load a cached Team.
   */
  homeTeamId: number;
  /**
   * The home team's roster, containing player info and
   * stats.
   */
  homeRoster: BoxscorePlayer[];
  /**
   * The total points scored by the away team.
   */
  awayScore: number;
  /**
   * The away team's id. Can be used to load a cached Team.
   */
  awayTeamId: number;
  /**
   * The away team's roster, containing player info and
   * stats.
   */
  awayRoster: BoxscorePlayer[];
};

import BoxscorePlayer from '../boxscore-player/boxscore-player';
