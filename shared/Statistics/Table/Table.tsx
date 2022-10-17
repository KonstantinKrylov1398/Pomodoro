import React, { useState } from "react";
import { useSelector } from "react-redux";
import { rootState } from "../../../src/redux/redux";
import { todayDay } from "./hooksTable";
import { timeRender } from "./hookTimeRender";
import { QuantityTomate } from "./QuantityTomate";
import styles from "./table.css";

export function Table() {
  let intervalWork = useSelector<rootState, any>((state) => state.intervalWork);
  let histogramTime = intervalWork / 60;
  const minutes = 25;
  const date = new Date();
  let day = date.getDay();
  console.log(typeof day);
  return (
    <div className={styles.table_main}>
      <h2 className={styles.h2}>Ваша активность</h2>
      <div className={styles.table_statistics_flex}>
        <div>
          <div className={styles.table_statistics_day}>
            <div className={styles.table_statistics_one}> {todayDay()}</div>
            <div className={styles.table_statistics_two}>
              {intervalWork > 0
                ? `Вы работали над задачами в течение ${timeRender(
                    intervalWork
                  )}`
                : "Нет данных"}
            </div>
          </div>
          <QuantityTomate />
        </div>
        <div className={styles.table_statistics_table}>
          <div className={styles.flex}>
            <div className={styles.block}></div>
            <div className={styles.time}>{minutes + 75} мин</div>
          </div>
          <div className={styles.flex}>
            <div className={styles.block}></div>
            <div className={styles.time}>{minutes + 50} мин</div>
          </div>
          <div className={styles.flex}>
            <div className={styles.block}></div>
            <div className={styles.time}>{minutes + 25} мин</div>
          </div>
          <div className={styles.flex}>
            <div className={styles.block}></div>
            <div className={styles.time}>{minutes} мин</div>
          </div>
          <div className={styles.week}>
            <div className={styles.relative}>
              <div
                style={{ height: `${day === 1 ? histogramTime * 3.4 : 0}px` }}
                className={styles.block_height}
              ></div>
              <div className={styles.day}>Пн</div>
            </div>
            <div className={styles.relative}>
              <div
                style={{ height: `${day === 2 ? histogramTime * 3.4 : 0}px` }}
                className={styles.block_height}
              ></div>
              <div className={styles.day}>Вт</div>
            </div>
            <div className={styles.relative}>
              <div className={styles.block_height}></div>
              <div
                style={{ height: `${day === 3 ? histogramTime * 3.4 : 0}px` }}
                className={styles.day}
              >
                Ср
              </div>
            </div>
            <div className={styles.relative}>
              <div className={styles.block_height}></div>
              <div
                style={{ height: `${day === 4 ? histogramTime * 3.4 : 0}px` }}
                className={styles.day}
              >
                Чт
              </div>
            </div>
            <div className={styles.relative}>
              <div className={styles.block_height}></div>
              <div
                style={{ height: `${day === 5 ? histogramTime * 3.4 : 0}px` }}
                className={styles.day}
              >
                Пт
              </div>
            </div>
            <div className={styles.relative}>
              <div className={styles.block_height}></div>
              <div
                style={{ height: `${day === 6 ? histogramTime * 3.4 : 0}px` }}
                className={styles.day}
              >
                Сб
              </div>
            </div>
            <div className={styles.relative}>
              <div className={styles.block_height}></div>
              <div
                style={{ height: `${day === 0 ? histogramTime * 3.4 : 0}px` }}
                className={styles.day}
              >
                Вс
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
