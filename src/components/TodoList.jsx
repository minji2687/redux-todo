import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/modules/todos";

export default function TodoList({ todos, setEditState, setEditIndex }) {
  console.log(todos);
  const dispatch = useDispatch();
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={`${todo.text}-${index}`}>
          <i className="far fa-check-square"></i>
          <span>
            {todo.text}
            <b>
              <a href="#" onClick={() => setEdit(index)}>
                Edit
              </a>
              <a href="#" onClick={() => onDeleteTodo(index)}>
                Del
              </a>
            </b>
          </span>
        </li>
      ))}
    </ul>
  );
  function onDeleteTodo(index) {
    dispatch(deleteTodo(index));
  }
  function setEdit(index) {
    setEditState();
    setEditIndex(index);
  }
}
