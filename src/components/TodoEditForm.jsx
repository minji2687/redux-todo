import { useRef } from "react";
export default function TodoEditForm({ editTodoItem }) {
  const inputRef = useRef();
  return (
    <div className="write edit">
      <input type="text" ref={inputRef} />
      <button className="btn add" onClick={editSave}>
        Edit
      </button>
    </div>
  );
  function editSave() {
    editTodoItem(inputRef.current.value);
    inputRef.current.value = "";
  }
}
