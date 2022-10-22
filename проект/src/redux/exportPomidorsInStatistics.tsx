import { ActionCreator } from "redux";
export const EXPORT_TOMATE = "EXPORT_TOMATE";
export type exportTomate = {
  type: typeof EXPORT_TOMATE;
  exportTomate: number;
};

export const exportTomateFunction: ActionCreator<exportTomate> = (number) => ({
  type: EXPORT_TOMATE,
  exportTomate: number,
});
