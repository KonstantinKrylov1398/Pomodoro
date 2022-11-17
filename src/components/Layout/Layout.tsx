import React from "react";
import styles from "./layout.css";

export function Layout({ children }: any) {
  return <div className={styles.layout}>{children}</div>;
}
