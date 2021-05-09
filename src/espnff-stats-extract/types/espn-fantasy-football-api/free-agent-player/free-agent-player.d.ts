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
/**
 * Represents a player and their raw stats.
 *
 * @augments {BaseObject}
 */
declare class FreeAgentPlayer extends BaseObject {
    /**
     * @typedef {object} FreeAgentPlayer~FreeAgentPlayerMap
     *
     * @property {Player} player The player model representing the NFL player.
     * @property {PlayerStats} rawStats The PlayerStats model with the raw statistics registered by
     *                                  the player over the season.
     * @property {PlayerStats} projectedRawStats The PlayerStats model with the raw statistics
     *                                           projected by the player over the season.
     */
    /**
     * @type {FreeAgentPlayer~FreeAgentPlayerMap}
     */
    static responseMap: FreeAgentPlayer;
}
import Player from "../player/player";
import BaseObject from "../base-classes/base-object/base-object";
