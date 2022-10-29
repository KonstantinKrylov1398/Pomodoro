import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.css";
import TomatoImage from "../../assets/tomatosmall.svg";
import ChartImage from "../../assets/chart.svg";
export function Header() {
  return (
    <div className={styles.header_main}>
      <Link to={"/"} className={styles.header_position}>
        <TomatoImage />
        <div className={styles.header}>pomodoro_box</div>
      </Link>

      <Link to={"/statistics"} className={styles.header_position}>
        <ChartImage className={styles.header_position_svg} />
        <div className={styles.header_statistics}> Статистика</div>
      </Link>
    </div>
  );
}
