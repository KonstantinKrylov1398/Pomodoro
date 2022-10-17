import { ActionCreator } from "redux";

export const STATE_MODAL = "STATE_MODAL";
export type stateModal = {
  type: typeof STATE_MODAL;
  stateBoolean: () => any;
};

export const changeStateModal: ActionCreator<stateModal> = (state) => ({
  type: STATE_MODAL,
  stateBoolean: state,
});
