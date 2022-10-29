import React from "react";
import { Header } from "../Header";
import { UsageStatistics } from "../UsageStatistics";
import { Select } from "../Select";
import styles from "./statisticspage.css";
import { Chart } from "../Chart";

export function StatisticsPage() {
  return (
    <div className={styles.statistics}>
      <div>
        <Header />
        <Select />
        <Chart />
        <UsageStatistics />
      </div>
    </div>
  );
}
