import { useRef } from "react";
export default function TodoForm({ addTodoItem }) {
  const inputRef = useRef();
  return (
    <div className="write">
      <input type="text" ref={inputRef} />
      <button className="btn add" onClick={addTodo}>
        Add
      </button>
    </div>
  );
  function addTodo() {
    addTodoItem(inputRef.current.value);
    inputRef.current.value = "";
  }
}
