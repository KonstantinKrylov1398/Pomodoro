import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addNull } from "../../utils/addNull";
import { intervalWorkFunction } from "../../redux/intervalWork";
import { intervalPauseFunction } from "../../redux/pauseInterval";
import { stopQuantityFunction } from "../../redux/quantityStop";
import styles from "./timer.css";
import { TitleTask } from "../TitleTask";
import { GetTask } from "../GetTask";
import { handleStart } from "../../utils/handleStart";
import { handlePause } from "../../utils/handlePause";
import { handleResume } from "../../utils/handleResume";
import { handleStop } from "../../utils/handleStop";
import { skipStop } from "../../utils/skipStop";
import { doneStop } from "../../utils/doneStop";
import { pauseAfterDoneFunction } from "../../utils/pauseAfterDoneFunction";
import { startResumeAfterDoneFunction } from "../../utils/startResumeAfterDoneFunction";
import AddMinute from "../../assets/addminute.svg";
export function Timer() {
  const [textContent, setTextContent] = useState("Помидор");
  const [pauseAfterDone, setPauseAfterDone] = useState(false);
  const [startResumeAfterDone, setStartResumeAfterDone] = useState(false);
  const [quantityStopInterval, setQuantityStopInterval] = useState(0);
  const [pause, setPause] = useState(0);
  const [pauseInterval, setPauseInterval] = useState(false);
  const [stopStart, setStopStart] = useState(true);
  const [skipStart, setSkipStart] = useState(false);
  const [doneStart, setDoneStart] = useState(false);
  const [startResume, setStartResume] = useState(false);
  const [startPause, setStartPause] = useState(false);
  const [style, setStyle] = useState("open");
  const [interval, setIntervalState] = useState<any>(25 * 60);
  const [intervalWork, setIntervalStateWork] = useState<any>(0);
  const [startRender, setStartRender] = useState(true);
  const [startTimer, setstartTimer] = useState(false);
  const minutes = addNull(Math.floor(interval / 60));
  const second = addNull(interval - minutes * 60);
  const dispatch = useDispatch();
  dispatch(stopQuantityFunction(quantityStopInterval));
  useEffect(() => {
    document.documentElement.setAttribute("data-open", style);
  }, [style]);
  useEffect(() => {
    dispatch(intervalWorkFunction(intervalWork));
    dispatch(intervalPauseFunction(pause));
    const start = setInterval(() => {
      startTimer && setIntervalStateWork(intervalWork + 1);
      startTimer && setIntervalState(interval - 1);
      pauseInterval && setPause(pause + 1);
      startResumeAfterDone || pauseAfterDone
        ? setTextContent("Перерыв")
        : setTextContent("Помидор");
    }, 1000);
    return () => {
      clearInterval(start);
    };
  }, [startTimer, interval, intervalWork, pause]);

  return (
    <div className={styles.window}>
      <div className={styles.window_header}>
        <TitleTask />
        <div className={styles.window_header_text_two}>{textContent}</div>
      </div>
      <div className={styles.window_timer_main}>
        <div className={styles.window_timer}>{minutes}</div>
        <div className={styles.window_timer}>:</div>
        <div className={styles.window_timer}>{second}</div>
        <AddMinute
          onClick={() => setIntervalState(interval + 60)}
          className={styles.window_timer_svg}
        />
      </div>

      <div className={styles.window_task}>
        <div className={styles.window_task_text_one}>
          <GetTask />
        </div>
      </div>
      <div className={styles.window_form}>
        {startResume && (
          <button
            onClick={() =>
              handleResume({
                setStartPause,
                setstartTimer,
                setPauseInterval,
                setStopStart,
                setStartResume,
                setDoneStart,
                setSkipStart,
              })
            }
            className={styles.window_button_one}
          >
            Продолжить
          </button>
        )}
        {startResumeAfterDone && (
          <button
            onClick={() =>
              startResumeAfterDoneFunction({
                setPauseAfterDone,
                setstartTimer,
                setPauseInterval,
                setStopStart,
                setStartResumeAfterDone,
                setDoneStart,
                setSkipStart,
              })
            }
            className={styles.window_button_one}
          >
            Продолжить
          </button>
        )}
        {startPause && (
          <button
            onClick={() =>
              handlePause({
                setStartPause,
                setstartTimer,
                setStartResume,
                setStyle,
                setStopStart,
                setDoneStart,
                setSkipStart,
                setPause,
                pause,
                setPauseInterval,
              })
            }
            className={styles.window_button_one}
          >
            Пауза
          </button>
        )}
        {startRender && (
          <button
            onClick={() =>
              handleStart({
                setStartRender,
                setStartPause,
                setStyle,
                setstartTimer,
                setPauseInterval,
              })
            }
            className={styles.window_button_one}
          >
            Старт
          </button>
        )}
        {pauseAfterDone && (
          <button
            onClick={() =>
              pauseAfterDoneFunction({
                setstartTimer,
                setStyle,
                setDoneStart,
                setStartResumeAfterDone,
                setSkipStart,
                setPauseAfterDone,
                setStopStart,
                setPauseInterval,
              })
            }
            className={styles.window_button_one}
          >
            Пауза
          </button>
        )}
        {stopStart && (
          <button
            onClick={() =>
              handleStop({
                interval,
                setIntervalState,
                setStartRender,
                setStartPause,
                setstartTimer,
                setStopStart,
                setStyle,
                setPauseInterval,
                setQuantityStopInterval,
                quantityStopInterval,
                setPauseAfterDone,
              })
            }
            className={styles.window_button_two}
          >
            Стоп
          </button>
        )}
        {skipStart && (
          <button
            onClick={() =>
              skipStop({
                setPauseInterval,
                setIntervalState,
                setstartTimer,
                setStartPause,
                setStartResume,
                setStartRender,
                setSkipStart,
                setStopStart,
                setStyle,
                setStartResumeAfterDone,
                setPauseAfterDone,
              })
            }
            className={styles.window_button_two}
          >
            Пропустить
          </button>
        )}
        {doneStart && (
          <button
            onClick={() =>
              doneStop({
                setStartResume,
                setStopStart,
                setStartRender,
                setPauseInterval,
                setDoneStart,
                setIntervalState,
                setStyle,
                setstartTimer,
                setSkipStart,
                setPauseAfterDone,
              })
            }
            className={styles.window_button_two}
          >
            Сделано
          </button>
        )}
      </div>
    </div>
  );
}
