import React, { Dispatch, useEffect, useRef, useState } from "react";
import styles from "./dropdownmenu.css";
import { useDispatch, useSelector } from "react-redux";
import { changeStateModal } from "../../redux/changeStateModal";
import { DeleteTodo } from "../DeleteTodo";
import { rootState } from "../../redux/redux";
import { exportTomateFunction } from "../../redux/exportPomidorsInStatistics";
import { minusOne } from "../../utils/minusOne";
import { plusOne } from "../../utils/plusOne";
import IconPlus from "../../assets/dropdownmenuplus.svg";
import IconMinus from "../../assets/dropdownmenuminus.svg";
import IconEdit from "../../assets/dropdownmenuedit.svg";
import IconDelete from "../../assets/dropdownmenudelete.svg";
export function DropdownMenu({
  setOpenDropdown,
  todo,
  todos,
  setOpenInput,
  quantityTomate,
  setTime,
  setStateCounter,
}: any) {
  let intervalWork = useSelector<rootState, any>((state) => state.intervalWork);
  const ref = useRef<HTMLDivElement>(null);
  const dispatch: Dispatch<any> = useDispatch();
  const [modalDelete, setModalDelete] = useState<boolean>(false);
  const [tomate, setTomate] = quantityTomate;
  dispatch(exportTomateFunction(tomate));
  dispatch(changeStateModal(setModalDelete));

  useEffect(() => {
    function closedEditModal(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        ref.current &&
        !ref.current.contains(event.target)
      )
        setOpenDropdown(false);
    }
    document.body.addEventListener("click", closedEditModal);
    return () => {
      document.body.removeEventListener("click", closedEditModal);
    };
  }, []);

  return (
    <div ref={ref} className={styles.dropdown}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <IconPlus className={styles.svg} />
          <div
            onClick={() =>
              plusOne({
                setStateCounter,
                setTomate,
                setTime,
                tomate,
                intervalWork,
              })
            }
          >
            Увеличить
          </div>
        </li>
        <li className={styles.li}>
          <IconMinus className={styles.svg} />
          <div
            onClick={() =>
              minusOne({
                setStateCounter,
                setTomate,
                setTime,
                tomate,
                intervalWork,
              })
            }
          >
            Уменьшить
          </div>
        </li>
        <li className={styles.li}>
          <IconEdit className={styles.svg} />
          <div onClick={() => setOpenInput(true)}>Редактировать</div>
        </li>
        <li className={styles.li}>
          <IconDelete className={styles.svg} />
          <div onClick={() => setModalDelete(true)}>Удалить</div>
        </li>
      </ul>
      {modalDelete && <DeleteTodo todo={todo} todos={todos} />}
    </div>
  );
}
