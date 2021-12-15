import { combineReducers } from "redux";
import globalReducer from "./GlobalReducer";
import homeReducer from "./HomeReducer";
import createBlogReducer from "./createBlogReducer";

//untuk menampung/mengembalikan/merubah value state
const reducer = combineReducers({
  homeReducer,
  globalReducer,
  createBlogReducer,
});

export default reducer;
