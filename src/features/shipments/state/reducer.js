import { createReducer } from "@reduxjs/toolkit";

import { fetchShipments, saveCargoBoxes } from "features/shipments";

export default createReducer(null, {
  [fetchShipments.SUCCEDED]: (state, action) => {
    state.shipmentsList = action.payload;
  },
  [saveCargoBoxes]: (state, { payload: { shipmentId, boxes } }) => {
    const shipment = state.shipmentsList.find(({ id }) => id === shipmentId);
    shipment.boxes = boxes;
  },
});
