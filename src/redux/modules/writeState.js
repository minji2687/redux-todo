const ADD_STATE = "ADD_STATE";
const EDIT_STATE = "EDIT_STATE";

export function setAddState() {
  return {
    type: ADD_STATE,
  };
}

export function setEditState() {
  return {
    type: EDIT_STATE,
  };
}

const initialState = "add";

export default function reducer(previousState = initialState, action) {
  if (action.type === EDIT_STATE) {
    previousState = "edit";
    return previousState;
  }

  if (action.type === ADD_STATE) {
    previousState = "add";
    return previousState;
  }

  return previousState;
}
