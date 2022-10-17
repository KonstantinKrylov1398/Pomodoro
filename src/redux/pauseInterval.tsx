import { ActionCreator } from "redux";
export const PAUSE_INTERVAL = "PAUSE_INTERVAL";
export type intervalPause = {
  type: typeof PAUSE_INTERVAL;
  intervalPauseNumber: number;
};

export const intervalPauseFunction: ActionCreator<intervalPause> = (
  number
) => ({
  type: PAUSE_INTERVAL,
  intervalPauseNumber: number,
});
