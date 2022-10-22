import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { padStart } from "./function/PadStart";
import { intervalWorkFunction } from "../../../redux/intervalWork";
import { intervalPauseFunction } from "../../../redux/pauseInterval";
import { stopQuantityFunction } from "../../../redux/quantityStop";
import styles from "./window.css";
import { TitleTask } from "./TitleTask";
import { TaskGet } from "./TaskGet";

export function Window() {
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
  const minutes = padStart(Math.floor(interval / 60));
  const second = padStart(interval - minutes * 60);
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

  function handleStart() {
    setStartRender(false);
    setStartPause(true);
    setStyle("start");
    setstartTimer(true);
    setPauseInterval(false);
  }
  function changeInterval() {
    setIntervalState(interval + 60);
  }
  function handlePause() {
    setStartPause(false);
    setstartTimer(false);
    setStartResume(true);
    setStyle("pause");
    setStopStart(false);
    setDoneStart(true);
    setSkipStart(false);
    setPause(pause + 1);
    setPauseInterval(true);
  }
  function handleResume() {
    setStartPause(true);
    setstartTimer(true);
    setPauseInterval(false);
    setStopStart(true);
    setStartResume(false);
    setDoneStart(false);
    setSkipStart(false);
  }
  function handleStop() {
    if (interval === 25 * 60) {
      return;
    }
    setIntervalState(25 * 60);
    setStartRender(true);
    setStartPause(false);
    setstartTimer(false);
    setStopStart(true);
    setStyle("afterSkip");
    setPauseInterval(false);
    setQuantityStopInterval(quantityStopInterval + 1);
    setPauseAfterDone(false);
  }
  function skipStop() {
    setPauseInterval(false);
    setIntervalState(25 * 60);
    setstartTimer(false);
    setStartPause(false);
    setStartResume(false);
    setStartRender(true);
    setSkipStart(false);
    setStopStart(true);
    setStyle("afterSkip");
    setStartResumeAfterDone(false);
    setPauseAfterDone(false);
  }
  function doneStop() {
    setStartResume(false);
    setStopStart(false);
    setStartRender(false);
    setPauseInterval(false);
    setDoneStart(false);
    setIntervalState(5 * 60);
    setStyle("stop");
    setstartTimer(true);
    setSkipStart(true);
    setPauseAfterDone(true);
  }
  function pauseAfterDoneFunction() {
    setstartTimer(false);
    setStyle("stop");
    setDoneStart(false);
    setStartResumeAfterDone(true);
    setSkipStart(true);
    setPauseAfterDone(false);
    setStopStart(false);
    setPauseInterval(true);
  }
  function startResumeAfterDoneFunction() {
    setPauseAfterDone(true);
    setstartTimer(true);
    setPauseInterval(false);
    setStopStart(true);
    setStartResumeAfterDone(false);
    setDoneStart(false);
    setSkipStart(false);
    setPauseInterval(false);
  }
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
        <svg
          onClick={changeInterval}
          className={styles.window_timer_svg}
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="25" cy="25" r="25" fill="#C4C4C4" />
          <path
            d="M26.2756 26.1321V33H23.7244V26.1321H17V23.7029H23.7244V17H26.2756V23.7029H33V26.1321H26.2756Z"
            fill="white"
          />
        </svg>
      </div>

      <div className={styles.window_task}>
        <div className={styles.window_task_text_one}>
          <TaskGet />
        </div>
      </div>
      <div className={styles.window_form}>
        {startResume && (
          <button onClick={handleResume} className={styles.window_button_one}>
            Продолжить
          </button>
        )}
        {startResumeAfterDone && (
          <button
            onClick={startResumeAfterDoneFunction}
            className={styles.window_button_one}
          >
            Продолжить
          </button>
        )}
        {startPause && (
          <button onClick={handlePause} className={styles.window_button_one}>
            Пауза
          </button>
        )}
        {startRender && (
          <button onClick={handleStart} className={styles.window_button_one}>
            Старт
          </button>
        )}
        {pauseAfterDone && (
          <button
            onClick={pauseAfterDoneFunction}
            className={styles.window_button_one}
          >
            Пауза
          </button>
        )}
        {stopStart && (
          <button onClick={handleStop} className={styles.window_button_two}>
            Стоп
          </button>
        )}
        {skipStart && (
          <button onClick={skipStop} className={styles.window_button_two}>
            Пропустить
          </button>
        )}
        {doneStart && (
          <button onClick={doneStop} className={styles.window_button_two}>
            Сделано
          </button>
        )}
      </div>
    </div>
  );
}
