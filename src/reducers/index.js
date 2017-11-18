import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import coin from "./coin";
import coins from "./coins";
export default combineReducers({
  coin,
  coins,
  routing: routerReducer
});
