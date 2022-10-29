import React from "react";
import { useSelector } from "react-redux";
import { rootState } from "../../redux/redux";
import styles from "./gettask.css";

export function GetTask() {
  const todo = useSelector<rootState, any>((state) => state.getTask);
  return (
    <div>
      Задача {todo.number} - {todo.task}
    </div>
  );
}
