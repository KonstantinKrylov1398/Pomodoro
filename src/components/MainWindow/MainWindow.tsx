import React from "react";
import styles from "./mainwindow.css";
import { JobDescription } from "../JobDescription";
import { Form } from "../Form";
import { Timer } from "../Timer";

export function MainWindow() {
  return (
    <div className={styles.mainJoin}>
      <div>
        <JobDescription />
        <Form />
      </div>
      <Timer />
    </div>
  );
}
