import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import * as shipments from "features/shipments";

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    shipments: shipments.reducer,
  });
