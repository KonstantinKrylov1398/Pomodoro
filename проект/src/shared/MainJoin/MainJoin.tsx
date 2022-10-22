import React from "react";
import { Main } from "./Main";
import { Window } from "./Window";
import styles from "./mainjoin.css";
import { useSelector } from "react-redux";
import { rootState } from "../../redux/redux";

export function MainJoin() {
  return (
    <div className={styles.mainJoin}>
      <Main />
      <Window />
    </div>
  );
}
