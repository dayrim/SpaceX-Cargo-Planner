import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";

import { ShipmentView } from "features/shipments";
import { BaseLayout } from "layouts";
import { getShipments } from "features/shipments";

const Shipments = () => {
  const shipments = useSelector(getShipments);
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    setRoutes(shipments.map(({ id, name }) => ({ key: id, name })));
  }, [shipments]);

  return (
    <BaseLayout routes={routes}>
      <Route path="/:shipmentId">
        <ShipmentView></ShipmentView>
      </Route>
    </BaseLayout>
  );
};

export default Shipments;
