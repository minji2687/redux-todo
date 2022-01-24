import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import TodoAddForm from "../components/TodoAddForm";
import TodoEditForm from "../components/TodoEditForm";
import { addTodo, editTodo } from "../redux/modules/todos";
import { setAddState } from "../redux/modules/writeState";

export default function TodoFormContainer() {
  const dispatch = useDispatch();
  const writeState = useSelector((state) => {
    return state.writeState;
  });

  const editItemIndex = useSelector((state) => {
    return state.editItemIndex;
  });

  const addTodoItem = useCallback(
    (text) => {
      dispatch(addTodo(text));
    },
    [dispatch]
  );

  const editTodoItem = (text) => {
    dispatch(editTodo(editItemIndex, text));
    dispatch(setAddState());
  };

  return writeState === "add" ? (
    <TodoAddForm addTodoItem={addTodoItem} />
  ) : (
    <TodoEditForm editTodoItem={editTodoItem} />
  );
}
