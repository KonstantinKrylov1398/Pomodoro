import { ReactNode } from "react";
import { Reducer } from "redux";
import { CHANGE_COUNTER, typeCounter } from "./changeCounterRedux";
import { stateModal, STATE_MODAL } from "./changeStateModal";
import { dispatchForm, DISPATCH_FORM } from "./dispatchForm";
import { taskGetFunction, TASK_GET_STRING } from "./editTaskFunction";
import { exportTomate, EXPORT_TOMATE } from "./exportPomidorsInStatistics";
import { getTask, GET_TASK } from "./getTask";
import { intervalWork, INTERVAL_WORK } from "./intervalWork";
import { intervalPause, PAUSE_INTERVAL } from "./pauseInterval";
import { stopQuantity, STOP_QUANTITY } from "./quantityStop";
const initialState = {
  number: [],
  state: () => true,
  functionTask: 0,
  intervalWork: 0,
  exportTomate: 0,
  intervalPauseNumber: 0,
  quantityStopNumber: 0,
  dispatchForm: [],
  getTask: {},
};
export type rootState = {
  number: ReactNode;
  state: () => any;
  functionTask: any;
  intervalWork: number;
  exportTomate: number;
  intervalPauseNumber: number;
  quantityStopNumber: number;
  dispatchForm: any;
  getTask: {};
};
export type myAction =
  | typeCounter
  | stateModal
  | taskGetFunction
  | intervalWork
  | exportTomate
  | intervalPause
  | stopQuantity
  | dispatchForm
  | getTask;
export const myReducer: Reducer<rootState, myAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CHANGE_COUNTER: {
      return {
        ...state,
        number: action.number,
      };
    }
    case STATE_MODAL: {
      return {
        ...state,
        state: action.stateBoolean,
      };
    }
    case TASK_GET_STRING: {
      return {
        ...state,
        functionTask: action.taskGetFunction,
      };
    }
    case INTERVAL_WORK: {
      return {
        ...state,
        intervalWork: action.intervalWorkNumber,
      };
    }
    case EXPORT_TOMATE: {
      return {
        ...state,
        exportTomate: action.exportTomate,
      };
    }
    case PAUSE_INTERVAL: {
      return {
        ...state,
        intervalPauseNumber: action.intervalPauseNumber,
      };
    }
    case STOP_QUANTITY: {
      return {
        ...state,
        quantityStopNumber: action.quantityStopNumber,
      };
    }
    case DISPATCH_FORM: {
      return {
        ...state,
        dispatchForm: action.dispatchForm,
      };
    }
    case GET_TASK: {
      return {
        ...state,
        getTask: action.todo,
      };
    }
    default:
      return state;
  }
};
