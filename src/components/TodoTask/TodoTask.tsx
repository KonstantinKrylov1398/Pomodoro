import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { functionGetTask } from "../../redux/getTask";
import { blurInput } from "../../utils/blurInput";
import { DropdownMenu } from "../DropdownMenu";
import styles from "./todotask.css";
import OpenDropdownMenu from "../../assets/adddropdowmmenu.svg";
export function TodoTask({ todo, todos, input, quantityTomate, setTime }: any) {
  const inputEditRef = useRef<any>(null);
  const refTask = useRef(null);
  const [inputValue, setInputValue] = useState(todo.task);
  const [openInput, setOpenInput] = useState(false);
  const [stateCounter, setStateCounter] = useState<number>(0);
  const [openDropdown, setOpenDropdown] = useState(false);
  const dispatch = useDispatch();
  function handleChange(event: any) {
    setInputValue(event.target.value);
  }
  useEffect(() => {
    if (openInput) {
      inputEditRef.current.focus();
    }
  }, [openInput, inputEditRef]);
  return (
    <div className={styles.todo}>
      <div className={styles.number}>{stateCounter}</div>
      <div
        onClick={() => dispatch(functionGetTask(todo))}
        ref={refTask}
        className={styles.task}
      >
        {todo.task}
      </div>
      <OpenDropdownMenu
        onClick={() => setOpenDropdown(true)}
        className={styles.svg}
      />
      {openDropdown === true && (
        <div>
          <DropdownMenu
            setStateCounter={setStateCounter}
            setTime={setTime}
            quantityTomate={quantityTomate}
            setOpenInput={setOpenInput}
            input={input}
            refTask={refTask}
            todo={todo}
            todos={todos}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
          />
        </div>
      )}
      {openInput && (
        <input
          value={inputValue}
          onBlur={() => blurInput({ setOpenInput, todo, inputValue })}
          ref={inputEditRef}
          onChange={handleChange}
          className={styles.inputEdit}
          type="text"
        />
      )}
    </div>
  );
}
