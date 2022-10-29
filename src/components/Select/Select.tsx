import React, { useEffect, useRef, useState } from "react";
import { openSelect } from "../../utils/openSelect";
import styles from "./select.css";
import ArrowDown from "../../assets/arrowselectdown.svg";
import ArrowUp from "../../assets/arrowselectup.svg";
export function Select() {
  const [stateItemAll, setStateItemAll] = useState(false);
  const [stateItemOneSvg, setStateItemOneSvg] = useState(true);
  const [stateItemOneRes, setStateItemOneRes] = useState(true);
  const [stateItemTwoRes, setStateItemTwoRes] = useState(false);
  const [stateItemThreeRes, setStateItemThreeRes] = useState(false);
  const refOne = useRef(null);
  const refTwo = useRef(null);
  const refThree = useRef(null);
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
        {stateItemOneSvg && <ArrowDown className={styles.select_svg} />}
        {stateItemOneRes && (
          <div
            className={styles.options}
            onClick={() =>
              openSelect(setStateItemOneRes(false), {
                setStateItemOneSvg,
                setStateItemAll,
              })
            }
          >
            Эта неделя
          </div>
        )}
        {stateItemTwoRes && (
          <div
            className={styles.options}
            onClick={() =>
              openSelect(setStateItemTwoRes(false), {
                setStateItemOneSvg,
                setStateItemAll,
              })
            }
          >
            Прошлая неделя
          </div>
        )}

        {stateItemThreeRes && (
          <div
            className={styles.options}
            onClick={() =>
              openSelect(setStateItemThreeRes(false), {
                setStateItemOneSvg,
                setStateItemAll,
              })
            }
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
            <ArrowUp className={styles.select_svg} />
          </div>
        )}
      </div>
    </div>
  );
}
