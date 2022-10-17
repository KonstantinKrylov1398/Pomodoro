import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import { timeRender } from "../../../Statistics/Table/hookTimeRender";
import { TodoTask } from "../TodoTask";
import styles from "./form.css";
export function Form() {
  const [todos, setTodos] = useState<any>([]);
  const inputRef = useRef<any>(null);
  const [quantityTomate, setQuantityTomate] = useState(0);
  const [inputValue, setInputValue] = useState<any>("");
  const [time, setTime] = useState(0);
  const [serialNumber, setSerialNumber] = useState(1);
  function addTask() {
    if (inputValue.length === 0) {
      return;
    } else {
      const newItem = {
        number: serialNumber,
        id: Math.random(),
        task: inputValue,
        edit: false,
      };
      setTodos([...todos, newItem]);
      setSerialNumber(todos.length + 2);
    }
  }

  function handleChange(input: ChangeEvent<HTMLInputElement>) {
    setInputValue(input.target.value);
  }
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addTask();
    setInputValue("");
  }
  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit} action="">
        <input
          ref={inputRef}
          placeholder="Название задачи"
          onChange={handleChange}
          value={inputValue}
          className={styles.form_input}
          type="text"
        />
        <button className={styles.form_button}>Добавить</button>
      </form>
      {todos.map((todo: any) => {
        return (
          <div key={todo.id}>
            <TodoTask
              setTime={setTime}
              quantityTomate={[quantityTomate, setQuantityTomate]}
              input={inputRef}
              todo={todo}
              todos={[todos, setTodos]}
            />
          </div>
        );
      })}
      <div className={styles.time}>{time === 0 ? "" : timeRender(time)}</div>
    </div>
  );
}
