import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { rootState } from "../../redux/redux";
import styles from "./usagestatistics.css";
import { timeRenderPause } from "./timePauseRender";
import { focus } from "../../utils/focus";
import ImageFocus from "../../assets/imagefocus.svg";
import PauseTime from "../../assets/pausetime.svg";
import StopImage from "../../assets/stopimage.svg";
export function UsageStatistics() {
  const [style, setStyle] = useState("falseQuantity");
  let intervalWork = useSelector<rootState, any>((state) => state.intervalWork);
  let stopQuantity = useSelector<rootState, any>(
    (state) => state.quantityStopNumber
  );
  const importTomate = useSelector<rootState, any>(
    (state) => state.exportTomate
  );
  let pauseInterval = useSelector<rootState, any>(
    (state) => state.intervalPauseNumber
  );
  useEffect(() => {
    document.documentElement.setAttribute("data-open", style);
    if (intervalWork > 0) {
      setStyle("trueQuantity");
    }
  }, [style]);

  return (
    <div className={styles.result_flex}>
      <div className={styles.result_block_one}>
        <div>
          <div className={styles.result_header}>Фокус</div>
          <div className={styles.result_result}>
            {focus({ intervalWork, importTomate })}%
          </div>
        </div>
        <ImageFocus className={styles.result_svg_one} />
      </div>
      <div className={styles.result_block_two}>
        <div>
          <div className={styles.result_header}>Время на паузе</div>
          <div className={styles.result_result}>
            {timeRenderPause(pauseInterval)}
          </div>
        </div>
        <PauseTime className={styles.result_svg_two} />
      </div>
      <div className={styles.result_block_three}>
        <div>
          <div className={styles.result_header}>Остановки</div>
          <div className={styles.result_result}>{stopQuantity}</div>
        </div>
        <StopImage className={styles.result_svg_three} />
      </div>
    </div>
  );
}
