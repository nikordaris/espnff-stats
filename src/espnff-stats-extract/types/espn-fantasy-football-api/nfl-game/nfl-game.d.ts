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
