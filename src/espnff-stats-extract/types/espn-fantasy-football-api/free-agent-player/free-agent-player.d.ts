export default FreeAgentPlayer;
/**
 * ~FreeAgentPlayerMap
 */
export type FreeAgentPlayer = {
  /**
   * The player model representing the NFL player.
   */
  player: Player;
  /**
   * The PlayerStats model with the raw statistics registered by
   * the player over the season.
   */
  rawStats: any;
  /**
   * The PlayerStats model with the raw statistics
   * projected by the player over the season.
   */
  projectedRawStats: any;
};

import Player from '../player/player';
