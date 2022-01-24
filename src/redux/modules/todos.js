import { useSelector } from "react-redux";

// 액션 타입 정의
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const EDIT_TODO = "EDIT_TODO";
const TODO_STATE_CHANGE = "COMPLETE_TODO";
// 액션 생성 함수

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo,
  };
}

export function deleteTodo(index) {
  return {
    type: DELETE_TODO,
    index,
  };
}

export function editTodo(editItemIndex, text) {
  return {
    type: EDIT_TODO,
    payload: {
      todo: text,
      index: editItemIndex,
    },
  };
}

export function todoStateChange(index) {
  return {
    type: TODO_STATE_CHANGE,
    index,
  };
}

const initialState = [];
// 리듀서
export default function reducer(previousState = initialState, action) {
  if (action.type === ADD_TODO) {
    return [
      ...previousState,
      {
        text: action.todo,
        state: "yet",
      },
    ];
  }

  if (action.type === DELETE_TODO) {
    return previousState.filter((todo, index) => index !== action.index);
  }

  if (action.type === EDIT_TODO) {
    return previousState.map((todo, index) => {
      if (index === action.payload.index) {
        todo.text = action.payload.todo;
      }
      return todo;
    });
  }

  if (action.type === TODO_STATE_CHANGE) {
    return previousState.map((todo, index) => {
      if (action.index === index) {
        todo.state = todo.state === "yet" ? "done" : "yet";
      }
      return todo;
    });
  }

  return previousState;
}
