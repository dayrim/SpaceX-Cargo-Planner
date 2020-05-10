import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as Yup from "yup";

import { Toolbar, SearchInput, Button, Input } from "components";
import { fetchShipments } from "features/shipments";
import { localPersist } from "services";
import { getShipments } from "features/shipments/state/selectors";
import { saveCargoBoxes } from "features/shipments/state/actions";

import useStyles from "./ShipmentView.style";

const ShipmentView = () => {
  const classes = useStyles();
  const { shipmentId } = useParams();
  const [shipment, setShipment] = useState(null);
  const [boxes, setBoxes] = useState([]);
  const shipments = useSelector(getShipments);
  const [cargoBayCount, setCargoBayCount] = useState(0);
  const dispatch = useDispatch();

  /* Find shipment by id */
  useEffect(() => {
    const shipment = shipments.find(({ id }) => id === shipmentId);
    if (shipment) {
      setShipment(shipment);
      setBoxes(shipment?.boxes || []);
    }
  }, [shipmentId, shipments]);

  /* Calculate cargo bay count */
  useEffect(() => {
    if (shipment) {
      if (!boxes.length) setCargoBayCount(0);
      else {
        const cargoSumm = boxes
          .split(",")
          .reduce((summ, box) => Number(summ) + Number(box), 0);
        setCargoBayCount(Math.ceil(cargoSumm / 10));
      }
    }
  }, [boxes, shipment]);

  return (
    <div className={classes.shipmentView}>
      <Toolbar>
        <h1 className={classes.toolbarHeader}>Cargo Planner</h1>
        <SearchInput className={classes.toolbarSearch}></SearchInput>
        <div className={classes.toolbarActions}>
          <Button onClick={(e) => dispatch(fetchShipments.STARTED())}>
            Load
          </Button>
          <Button onClick={(e) => localPersist.saveShipments(shipments)}>
            Save
          </Button>
        </div>
      </Toolbar>

      {!shipment && <p>Shipment not found</p>}
      {shipment && (
        <>
          <h1>{shipment.name}</h1>
          <a href={`mailto: ${shipment.email}`}>{shipment.email}</a>
          <p>
            Number of required cargo bays:{" "}
            <span className={classes.cargoBayCount}>{cargoBayCount}</span>
          </p>
          <label className={classes.label}>Cargo boxes</label>
          <Input
            value={boxes}
            onChange={(e) => {
              console.log(shipmentId, "shipmentId");
              dispatch(saveCargoBoxes({ shipmentId, boxes: e.target.value }));
            }}
            validation={Yup.string().matches(
              /^(\s*-?\d+(\.\d+)?)(\s*,\s*-?\d+(\.\d+)?)*$/
            )}
          ></Input>
        </>
      )}
    </div>
  );
};
export default ShipmentView;
