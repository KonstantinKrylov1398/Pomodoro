import React from "react";
import { useSelector } from "react-redux";
import { rootState } from "../../redux/redux";
import { todayDay } from "../../utils/todayDay";
import { timeRender } from "../../utils/timeRender";
import { QuantityTomate } from "../QuantityTomate";
import styles from "./chart.css";
export function Chart() {
  let intervalWork = useSelector<rootState, any>((state) => state.intervalWork);
  let histogramTime = intervalWork / 60;
  const minutes = 25;
  const date = new Date();
  let day = date.getDay();
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
              <div
                style={{ height: `${day === 3 ? histogramTime * 3.4 : 0}px` }}
                className={styles.block_height}
              ></div>
              <div className={styles.day}>Ср</div>
            </div>
            <div className={styles.relative}>
              <div
                style={{ height: `${day === 4 ? histogramTime * 3.4 : 0}px` }}
                className={styles.block_height}
              ></div>
              <div className={styles.day}>Чт</div>
            </div>
            <div className={styles.relative}>
              <div
                style={{ height: `${day === 5 ? histogramTime * 3.4 : 0}px` }}
                className={styles.block_height}
              ></div>
              <div className={styles.day}>Пт</div>
            </div>
            <div className={styles.relative}>
              <div
                style={{ height: `${day === 6 ? histogramTime * 3.4 : 0}px` }}
                className={styles.block_height}
              ></div>
              <div className={styles.day}>Сб</div>
            </div>
            <div className={styles.relative}>
              <div
                style={{ height: `${day === 0 ? histogramTime * 3.4 : 0}px` }}
                className={styles.block_height}
              ></div>
              <div className={styles.day}>Вс</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
