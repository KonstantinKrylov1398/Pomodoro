import { ActionCreator } from "redux";
export const STOP_QUANTITY = "STOP_QUANTITY";
export type stopQuantity = {
  type: typeof STOP_QUANTITY;
  quantityStopNumber: number;
};

export const stopQuantityFunction: ActionCreator<stopQuantity> = (number) => ({
  type: STOP_QUANTITY,
  quantityStopNumber: number,
});
