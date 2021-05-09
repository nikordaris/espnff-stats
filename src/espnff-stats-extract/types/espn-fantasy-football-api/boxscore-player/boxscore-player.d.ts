export default BoxscorePlayer;
/**
 * ~BoxscorePlayerMap
 */
export type BoxscorePlayer = {
  /**
   * The player model representing the NFL player.
   */
  player: Player;
  /**
   * The position the player is slotted at in the fantasy lineup.
   */
  position: string;
  /**
   * The total points scored by the player.
   */
  totalPoints: number;
  /**
   * The PlayerStats model with the points scored by the
   * player.
   */
  pointBreakdown: any;
  /**
   * The PlayerStats model with the raw statistics registered by
   * the player.
   */
  rawStats: any;
};

import Player from '../player/player';
