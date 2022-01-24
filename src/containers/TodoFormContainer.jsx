import { useCallback } from "react";
import { useDispatch } from "react-redux";
import TodoForm from "../components/TodoForm";
import { addTodo } from "../redux/modules/todos";
export default function TodoFormContainer() {
  const dispatch = useDispatch();

  const addTodoItem = useCallback(
    (text) => {
      dispatch(addTodo(text));
    },
    [dispatch]
  );
  return <TodoForm addTodoItem={addTodoItem} />;
}
