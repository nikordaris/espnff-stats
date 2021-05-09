export default League;
/**
 * ~DraftSettings
 */
export type LeagueScheduleSettings = {
  numberOfRegularSeasonMatchups: number;
  regularSeasonMatchupLength: number;
  numberOfPlayoffMatchups: number;
  playoffMatchupLength: number;
  numberOfPlayoffTeams: number;
};
export type League = {
  /**
   * The date of the draft.
   */
  date: Date;
  /**
   * The type of draft.
   */
  type: any;
  /**
   * The amount of time to make a selection.
   */
  timePerPick: number;
  /**
   * Whether or not draft picks can be traded.
   */
  canTradeDraftPicks: boolean;
  name: string;
  size: number;
  scheduleSettings: LeagueScheduleSettings;
};
