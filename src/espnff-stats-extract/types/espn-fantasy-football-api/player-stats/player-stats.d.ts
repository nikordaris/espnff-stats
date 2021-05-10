export function parsePlayerStats({
  responseData,
  constructorParams,
  usesPoints,
  seasonId,
  statKey,
  statSourceId,
  statSplitTypeId,
}: {
  responseData: any;
  constructorParams: any;
  usesPoints: any;
  seasonId: any;
  statKey: any;
  statSourceId: any;
  statSplitTypeId: any;
}): BaseObject;
export default PlayerStats;
/**
 * ~PlayerStatsMap
 *
 * Defensive yards allowed and points allowed are inclusive and only scored when their condition
 * is met. For example, if a DST allowed 360 yards, then `defensive350To399YardsAllowed` will be
 * scored (value is 1 when statistical) and the other defensive yard stats will not be populated.
 */
export type PlayerStats = {
  /**
   * Total passing yards (typically a QB stat).
   */
  passingYards: number;
  /**
   * Total passing TDs (typically a QB stat).
   */
  passingTouchdowns: number;
  /**
   * Total passing 2 point conversion (typically a QB stat).
   */
  passing2PtConversion: number;
  /**
   * Total passing attempts resulting in an interception
   * (typically negative points) (typically a QB stat).
   */
  passingInterceptions: number;
  /**
   * Total rushing yards.
   */
  rushingYards: number;
  /**
   * Total rushing touchdowns.
   */
  rushingTouchdowns: number;
  /**
   * Total rushing 2 point conversions.
   */
  rushing2PtConversions: number;
  /**
   * Total receiving yards.
   */
  receivingYards: number;
  /**
   * Total receiving touchdowns.
   */
  receivingTouchdowns: number;
  /**
   * Total receiving 2 point conversions.
   */
  receiving2PtConversions: number;
  /**
   * Total receptions (only populated in PPR
   * leagues).
   */
  receivingReceptions: number;
  /**
   * Total fumbles lost (typically negative points) (applies to all
   * offensive players).
   */
  lostFumbles: number;
  /**
   * Total made field goals from 50 yards or further.
   */
  madeFieldGoalsFrom50Plus: number;
  /**
   * Total made field goals from 40 yards to 49 yards.
   */
  madeFieldGoalsFrom40To49: number;
  /**
   * Total made field goals from under 40 yards.
   */
  madeFieldGoalsFromUnder40: number;
  /**
   * Total missed field goals (typically negative or zero
   * points).
   */
  missedFieldGoals: number;
  /**
   * Made extra point attempts.
   */
  madeExtraPoints: number;
  /**
   * Missed extra point attempts (typically negative points).
   */
  missedExtraPoints: number;
  /**
   * When a DST allowed 0 points in their NFL game.
   */
  defensive0PointsAllowed: number;
  /**
   * When a DST allowed 1-6 points in their NFL game.
   */
  defensive1To6PointsAllowed: number;
  /**
   * When a DST allowed 7-13 points in their NFL
   * game.
   */
  defensive7To13PointsAllowed: number;
  /**
   * When a DST allowed 14-17 points in their NFL
   * game.
   */
  defensive14To17PointsAllowed: number;
  /**
   * When a DST allowed 28-34 points in their NFL
   * game.
   */
  defensive28To34PointsAllowed: number;
  /**
   * When a DST allowed 35-45 points in their NFL
   * game.
   */
  defensive35To45PointsAllowed: number;
  /**
   * When a DST blocks any kick and returns it
   * for a touchdown.
   */
  defensiveBlockedKickForTouchdowns: number;
  /**
   * When a DST records an interception.
   */
  defensiveInterceptions: number;
  /**
   * When a DST recovers a fumble.
   */
  defensiveFumbles: number;
  /**
   * When a DST blocks any kick.
   */
  defensiveBlockedKicks: number;
  /**
   * When a DST records a safety.
   */
  defensiveSafeties: number;
  /**
   * When a DST records a sack.
   */
  defensiveSacks: number;
  /**
   * When a DST returns a kickoff for a touchdown.
   */
  kickoffReturnTouchdown: number;
  /**
   * When a DST returns a punt for a touchdown.
   */
  puntReturnTouchdown: number;
  /**
   * When a DST returns a fumble for a touchdown.
   */
  fumbleReturnTouchdown: number;
  /**
   * When a DST returns an interception for a
   * touchdown.
   */
  interceptionReturnTouchdown: number;
  /**
   * When a DST allows 100-199 yards in their NFL
   * game.
   */
  defensive100To199YardsAllowed: number;
  /**
   * When a DST allows 200-299 yards in their NFL
   * game.
   */
  defensive200To299YardsAllowed: number;
  /**
   * When a DST allows 350-399 yards in their NFL
   * game.
   */
  defensive350To399YardsAllowed: number;
  /**
   * When a DST allows 400-449 yards in their NFL
   * game.
   */
  defensive400To449YardsAllowed: number;
  /**
   * When a DST allows 450-499 yards in their NFL
   * game.
   */
  defensive450To499YardsAllowed: number;
  /**
   * When a DST allows 500-549 yards in their NFL
   * game.
   */
  defensive500To549YardsAllowed: number;
  /**
   * When a DST allows 550 or more yards in their
   * NFL game.
   */
  defensiveOver550YardsAllowed: number;
};
import BaseObject from '../base-classes/base-object/base-object';
