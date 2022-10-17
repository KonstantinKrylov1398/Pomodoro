import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { functionGetTask } from "../../../../src/redux/getTask";
import { Dropdown } from "../../Dropdown";
import styles from "./todotask.css";
export function TodoTask({ todo, todos, input, quantityTomate, setTime }: any) {
  const inputEditRef = useRef<any>(null);
  const refTask = useRef(null);
  const [inputValue, setInputValue] = useState(todo.task);
  const [openInput, setOpenInput] = useState(false);
  const [stateCounter, setStateCounter] = useState<number>(1);
  const [openDropdown, setOpenDropdown] = useState(false);
  const dispatch = useDispatch();

  function handleChange(event: any) {
    setInputValue(event.target.value);
  }
  function blurInput() {
    setOpenInput(false);
    todo.task = inputValue;
  }
  useEffect(() => {
    if (openInput) {
      inputEditRef.current.focus();
    }
  }, [openInput, inputEditRef]);
  const clickOnDropdown = () => {
    setOpenDropdown(true);
  };
  return (
    <div
      onClick={() => dispatch(functionGetTask(todo))}
      className={styles.todo}
    >
      <div className={styles.number}>{stateCounter}</div>
      <div ref={refTask} className={styles.task}>
        {todo.task}
      </div>
      <svg
        onClick={clickOnDropdown}
        className={styles.svg}
        width="26"
        height="6"
        viewBox="0 0 26 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="3" cy="3" r="3" fill="#C4C4C4" />
        <circle cx="13" cy="3" r="3" fill="#C4C4C4" />
        <circle cx="23" cy="3" r="3" fill="#C4C4C4" />
      </svg>
      {openDropdown === true && (
        <div>
          <Dropdown
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
          onBlur={blurInput}
          ref={inputEditRef}
          onChange={handleChange}
          className={styles.inputEdit}
          type="text"
        />
      )}
    </div>
  );
}
