import { ReactNode } from "react";
import { ActionCreator } from "redux";

export const GET_TASK = "GET_TASK";
export type getTask = {
  type: typeof GET_TASK;
  todo: {};
};
export const functionGetTask: ActionCreator<getTask> = (todo) => ({
  type: GET_TASK,
  todo: todo,
});
