import { ActionCreator } from "redux";
export const TASK_GET_STRING = "TASK_GET_FUNCTION";
export type taskGetFunction = {
  type: typeof TASK_GET_STRING;
  taskGetFunction: any;
};

export const actionTaskGetObject: ActionCreator<taskGetFunction> = (
  functionTask
) => ({
  type: TASK_GET_STRING,
  taskGetFunction: functionTask,
});
