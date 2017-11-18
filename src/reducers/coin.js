import { handleActions } from "redux-actions";
import * as actions from "../actions";

const initialState = {
  coin: {
    id: "",
    name: "",
    symbol: "",
    rank: "",
    price_usd: "",
    price_btc: "",
    "24h_volume_usd": "",
    market_cap_usd: "",
    available_supply: "",
    total_supply: "",
    max_supply: "",
    percent_change_1h: "",
    percent_change_24h: "",
    percent_change_7d: "",
    last_updated: ""
  }
};

export default handleActions(
  {
    [actions.getCoinRequest]: (state, action) => ({
      ...state
    }),
    [actions.getCoinSuccess]: (state, action) => ({
      ...state,
      coin: action.payload[0]
    }),
    [actions.getCoinFailure]: (state, action) => ({
      ...state
    })
  },
  initialState
);
