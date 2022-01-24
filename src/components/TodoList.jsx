import { useDispatch } from "react-redux";
import { deleteTodo, todoStateChange } from "../redux/modules/todos";

export default function TodoList({ todos, setEditState, setEditIndex }) {
  console.log(todos);
  const dispatch = useDispatch();
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={`${todo.text}-${index}`}>
          {/* return <button className={`btn ${primary ? "blue" : "null"}`}>버튼</button>; */}

          {/* <i className="far fa-check-square"></i> */}
          <i
            className={`${
              todo.state === "yet" ? "far" : "fas"
            } fa-check-square`}
            onClick={() => checkItem(index)}
          ></i>
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
  function checkItem(index) {
    dispatch(todoStateChange(index));
  }
}
