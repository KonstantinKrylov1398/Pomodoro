import React from "react";
import styles from "./jobdescription.css";

export function JobDescription() {
  return (
    <div className={styles.mainOne}>
      <h2 className={styles.mainOne_h2}>Ура! Теперь можно начать работать:</h2>
      <ul className={styles.mainOne_ul}>
        <li className={styles.mainOne_li}>
          Выберите категорию и напишите название текущей задачи
        </li>
        <li className={styles.mainOne_li}>Запустите таймер («помидор»)</li>
        <li className={styles.mainOne_li}>
          {" "}
          Работайте пока «помидор» не прозвонит
        </li>
        <li className={styles.mainOne_li}>
          {" "}
          Сделайте короткий перерыв (3-5 минут)
        </li>
        <li className={styles.mainOne_li}>
          {" "}
          Продолжайте работать «помидор» за «помидором», пока задача не будут
          выполнена. Каждые 4 «помидора» делайте длинный перерыв (15-30 минут).
        </li>
      </ul>
    </div>
  );
}
