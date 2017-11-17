import { handleActions } from "redux-actions";
import * as actions from "../actions";

const initialState = {
  coins: [],
  coinsRequest: false
};

export default handleActions(
  {
    [actions.getCoinsRequest]: (state, action) => ({
      ...state,
      coinsRequest: true
    }),
    [actions.getCoinsSuccess]: (state, action) => ({
      ...state,
      coins: action.payload,
      coinsRequest: false
    }),
    [actions.getCoinsFailure]: (state, action) => ({
      ...state,
      coinsRequest: false
    })
  },
  initialState
);
