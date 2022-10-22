import React, { useEffect, useRef, useState } from "react";
import styles from "./select.css";
export function Select() {
  const [stateItemAll, setStateItemAll] = useState(false);
  const [stateItemOneSvg, setStateItemOneSvg] = useState(true);
  const [stateItemOneRes, setStateItemOneRes] = useState(true);
  const [stateItemTwoRes, setStateItemTwoRes] = useState(false);
  const [stateItemThreeRes, setStateItemThreeRes] = useState(false);
  const refOne = useRef(null);
  const refTwo = useRef(null);
  const refThree = useRef(null);
  function openSelect(state: any) {
    setStateItemOneSvg(false);
    setStateItemAll(true);
    state;
  }
  useEffect(() => {
    document.body.addEventListener("click", (event: any) => {
      console.log(event.target === refOne.current);
      if (event.target === refOne.current) {
        setStateItemAll(false);
        setStateItemOneRes(true);
        setStateItemOneSvg(true);
      }
      if (event.target === refTwo.current) {
        setStateItemAll(false);
        setStateItemTwoRes(true);
        setStateItemOneSvg(true);
      }
      if (event.target === refThree.current) {
        setStateItemAll(false);
        setStateItemThreeRes(true);
        setStateItemOneSvg(true);
      }
    });
  }, []);
  return (
    <div className={styles.select}>
      <div>
        {stateItemOneSvg && (
          <svg
            className={styles.select_svg}
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15 1L8 8L1 1" stroke="#B7280F" strokeWidth="2" />
          </svg>
        )}
        {stateItemOneRes && (
          <div
            className={styles.options}
            onClick={() => openSelect(setStateItemOneRes(false))}
          >
            Эта неделя
          </div>
        )}
        {stateItemTwoRes && (
          <div
            className={styles.options}
            onClick={() => openSelect(setStateItemTwoRes(false))}
          >
            Прошлая неделя
          </div>
        )}

        {stateItemThreeRes && (
          <div
            className={styles.options}
            onClick={() => openSelect(setStateItemThreeRes(false))}
          >
            2 недели назад
          </div>
        )}
        {stateItemAll && (
          <div>
            <div className={styles.options} ref={refOne}>
              Эта неделя
            </div>

            <div className={styles.options} ref={refTwo}>
              Прошлая неделя
            </div>
            <div className={styles.options} ref={refThree}>
              2 недели назад
            </div>
            <svg
              className={styles.select_svg}
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 9L8 2L15 9" stroke="#B7280F" strokeWidth="2" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
