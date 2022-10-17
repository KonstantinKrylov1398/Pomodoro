import React from "react";
import { Header } from "../Header";
import { Result } from "./Result";
import { Select } from "./Select";
import styles from "./statistics.css";
import { Table } from "./Table";

export function Statistics() {
  return (
    <div className={styles.statistics}>
      <div>
        <Header />
        <Select />
        <Table />
        <Result />
      </div>
    </div>
  );
}
