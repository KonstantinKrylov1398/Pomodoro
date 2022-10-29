import React from "react";
import { useSelector } from "react-redux";
import { rootState } from "../../redux/redux";
import { deleteTodo } from "../../utils/deleteTodo";
import styles from "./deletetodo.css";
import Icon from "../../assets/closedeletetodo.svg";
export function DeleteTodo({ todo, todos }: any) {
  const state = useSelector<rootState, any>((state) => state.state);
  const [getTodo, setGetTodo] = todos;
  return (
    <div>
      <div className={styles.modal}>
        <Icon onClick={() => state(false)} className={styles.svg} />
        <div className={styles.answer}>Удалить задачу?</div>
        <button
          onClick={() => deleteTodo({ getTodo, setGetTodo, todo, state })}
          className={styles.button}
        >
          Удалить
        </button>
        <a onClick={() => state(false)} className={styles.a}>
          Отмена
        </a>
      </div>
      <div className={styles.background}></div>
    </div>
  );
}
