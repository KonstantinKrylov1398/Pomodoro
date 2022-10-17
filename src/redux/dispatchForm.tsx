import { ActionCreator } from "redux";

export const DISPATCH_FORM = "DISPATCH_FORM";
export type dispatchForm = {
  type: typeof DISPATCH_FORM;
  dispatchForm: [];
};

export const changeDispatchForm: ActionCreator<dispatchForm> = (state) => ({
  type: DISPATCH_FORM,
  dispatchForm: state,
});
