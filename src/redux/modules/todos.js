// 액션 타입 정의
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
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
  return previousState;
}
