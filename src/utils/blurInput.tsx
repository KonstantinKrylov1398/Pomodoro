export function blurInput({ setOpenInput, todo, inputValue }: any) {
  setOpenInput(false);
  todo.task = inputValue;
}
