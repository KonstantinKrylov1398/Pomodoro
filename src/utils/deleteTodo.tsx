export function deleteTodo({ getTodo, setGetTodo, todo, state }: any) {
  setGetTodo([
    ...getTodo.filter((todoDelete: any) => todoDelete.id !== todo.id),
  ]);
  state(false);
}
