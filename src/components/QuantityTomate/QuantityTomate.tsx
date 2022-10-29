import React, { useState } from "react";
import { useSelector } from "react-redux";
import { rootState } from "../../redux/redux";
import { declinationWord } from "../../utils/declinationWord";
import styles from "./quantitytomate.css";
import BigTomato from "../../assets/tomatobig.svg";
import TomatoTwo from "../../assets/tomatothree.svg";
export function QuantityTomate() {
  const importTomate = useSelector<rootState, any>(
    (state) => state.exportTomate
  );
  return (
    <div className={styles.table_statistics}>
      {importTomate > 0 ? (
        <BigTomato className={styles.svg_two} />
      ) : (
        <TomatoTwo className={styles.table_svg} />
      )}
      {importTomate > 0 ? (
        <div className={styles.table_statistic}>
          <div className={styles.table_statistics_text}>
            {`${importTomate} ${declinationWord(importTomate)}`}
          </div>
          <div className={styles.x}>x{importTomate}</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
