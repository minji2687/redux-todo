import { useSelector, useDispatch } from "react-redux";
import TodoList from "../components/TodoList";
import { useCallback } from "react";
import { setEditState } from "../redux/modules/writeState";
import { setEditIndex } from "../redux/modules/editItemIndex";

export default function TodoListContainer() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => {
    return state.todos;
  });

  //   const editItemIndex = useSelector((state) => {
  //     return state.editItemIndex;
  //   });

  const setEditStr = useCallback(() => {
    dispatch(setEditState());
  }, [dispatch]);

  const setEditIdx = useCallback(
    (index) => {
      dispatch(setEditIndex(index));
    },
    [dispatch]
  );

  return (
    <div>
      <TodoList
        todos={todos}
        setEditState={setEditStr}
        setEditIndex={setEditIdx}
      />
    </div>
  );
}
