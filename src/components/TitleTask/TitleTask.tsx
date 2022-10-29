import React from "react";
import { useSelector } from "react-redux";
import { rootState } from "../../redux/redux";
import styles from "./titletask.css";

export function TitleTask() {
  const todo = useSelector<rootState, any>((state) => state.getTask);
  return <div className={styles.titleTask}>{todo.task}</div>;
}
