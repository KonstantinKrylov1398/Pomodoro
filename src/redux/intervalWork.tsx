import { ActionCreator } from "redux";
export const INTERVAL_WORK = "INTERVAL_WORK";
export type intervalWork = {
  type: typeof INTERVAL_WORK;
  intervalWorkNumber: number;
};

export const intervalWorkFunction: ActionCreator<intervalWork> = (number) => ({
  type: INTERVAL_WORK,
  intervalWorkNumber: number,
});
