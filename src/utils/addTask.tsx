export function addTask({
  inputValue,
  serialNumber,
  setTodos,
  todos,
  setSerialNumber,
}: any) {
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
