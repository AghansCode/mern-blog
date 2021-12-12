import { combineReducers } from "redux";
import globalReducer from "./GlobalReducer";
import homeReducer from "./HomeReducer";

//untuk menampung/mengembalikan/merubah value state
const reducer = combineReducers({
  homeReducer,
  globalReducer,
});

export default reducer;
