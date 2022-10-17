import { ReactNode } from "react";
import { ActionCreator } from "redux";

export const CHANGE_COUNTER = "CHANGE_COUNTER";
export type typeCounter = {
  type: typeof CHANGE_COUNTER;
  number: ReactNode;
};
export const changeCounterRedux: ActionCreator<typeCounter> = (counter) => ({
  type: CHANGE_COUNTER,
  number: counter,
});
