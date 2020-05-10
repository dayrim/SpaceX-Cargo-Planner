import { createAction } from "@reduxjs/toolkit";

export const fetchShipments = {
  STARTED: createAction("shipments__fetchShipments/STARTED"),
  SUCCEDED: createAction("shipments__fetchShipments/SUCCEDED"),
  FAILED: createAction("shipments__fetchShipments/FAILED"),
};

export const saveCargoBoxes = createAction("shipments__saveCargoBoxes");

export const searchShipments = createAction("shipments__searchShipments");
