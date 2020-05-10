import { combineEpics } from "redux-observable";

import * as shipments from "features/shipments";

export default combineEpics(...Object.values(shipments.epic));
