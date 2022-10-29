import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import { addTask } from "../../utils/addTask";
import { timeRender } from "../../utils/timeRender";
import { TodoTask } from "../TodoTask";
import styles from "./form.css";
export function Form() {
  const [todos, setTodos] = useState<any>([]);
  const inputRef = useRef<any>(null);
  const [quantityTomate, setQuantityTomate] = useState(0);
  const [inputValue, setInputValue] = useState<any>("");
  const [time, setTime] = useState(0);
  const [serialNumber, setSerialNumber] = useState(1);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addTask({
      inputValue,
      serialNumber,
      setTodos,
      todos,
      setSerialNumber,
    });
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
