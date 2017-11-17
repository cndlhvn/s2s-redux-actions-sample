import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import coins from "./coins";
export default combineReducers({
  coins,
  routing: routerReducer
});
