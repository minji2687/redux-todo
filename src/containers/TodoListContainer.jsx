import { useSelector } from "react-redux";
import TodoList from "../components/TodoList";

export default function TodoListContainer() {
  const todos = useSelector((state) => {
    return state.todos;
  });

  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
}
