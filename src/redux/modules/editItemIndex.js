const EIDT_INDEX = "EIDT_INDEX";

export function setEditIndex(index) {
  return {
    type: EIDT_INDEX,
    index,
  };
}

const initialState = null;

export default function reducer(previousState = initialState, action) {
  if (action.type === EIDT_INDEX) {
    previousState = action.index;
    return previousState;
  }
  return previousState;
}
