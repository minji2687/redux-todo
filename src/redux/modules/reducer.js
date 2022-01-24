import { combineReducers } from "redux";
import todos from "./todos";
import editItemIndex from "./editItemIndex";
import writeState from "./writeState";

const reducer = combineReducers({
  todos,
  writeState,
  editItemIndex,
});

export default reducer;
