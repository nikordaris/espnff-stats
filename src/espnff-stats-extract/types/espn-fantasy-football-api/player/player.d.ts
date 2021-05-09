export default Player;
/**
 * ~PlayerMap
 */
export type Player = {
  /**
   * The id of the player in the ESPN universe.
   */
  id: number;
  /**
   * The first name of the player.
   */
  firstName: string;
  /**
   * The last name of the player.
   */
  lastName: string;
  /**
   * The full name of the player.
   */
  fullName: string;
  /**
   * The jersey number the player wears.
   */
  jerseyNumber: number;
  /**
   * The NFL team the player is rostered on.
   */
  proTeam: string;
  /**
   * The NFL team abbreviation the player is rostered on.
   */
  proTeamAbbreviation: string;
  /**
   * The default position in a fantasy roster for the player.
   */
  defaultPosition: string;
  /**
   * A list of the eligible positions in a fantasy roster the
   * player may be slotted in.
   */
  eligiblePositions: string[];
  /**
   * The average position the player was drafted at in ESPN
   * snake drafts.
   */
  averageDraftPosition: number;
  /**
   * The average auction price the player fetched in ESPN
   *  auction drafts.
   */
  averageAuctionValue: number;
  /**
   * The change in player ownership percentage in the last
   * week across all ESPN leagues.
   */
  percentChange: number;
  /**
   * The percentage of ESPN league in which this player is/was
   * started.
   */
  percentStarted: number;
  /**
   * The percentage of ESPN leagues in which this player is owned.
   */
  percentOwned: number;
  /**
   * The datetime the player was acquired by their current fantasy
   * team.
   */
  acquiredDate: Date;
  /**
   * The fantasy roster status of the
   * player.
   */
  availabilityStatus: any;
  /**
   * Whether or not the player can be dropped from a team.
   */
  isDroppable: boolean;
  /**
   * Whether or not the player is injured.
   */
  isInjured: boolean;
  /**
   * The specific injury status/timeline of the player.
   */
  injuryStatus: any;
};
