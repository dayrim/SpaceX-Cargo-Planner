import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import FuzzySearch from "fuzzy-search";

import { ShipmentView } from "features/shipments";
import { BaseLayout } from "layouts";
import { getShipments, getSearchTerm } from "features/shipments";

const Shipments = () => {
  const shipments = useSelector(getShipments);
  const searchTerm = useSelector(getSearchTerm);
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    setRoutes(shipments.map(({ id, name }) => ({ key: id, name })));
  }, [shipments]);

  useEffect(() => {
    const searcher = new FuzzySearch(shipments, ["name"]);
    const searchResult = searcher.search(searchTerm);
    setRoutes(searchResult.map(({ id, name }) => ({ key: id, name })));
  }, [searchTerm, shipments]);

  return (
    <BaseLayout routes={routes}>
      <Route path="/" exact>
        <ShipmentView></ShipmentView>
      </Route>
      <Route path="/:shipmentId" exact>
        <ShipmentView></ShipmentView>
      </Route>
    </BaseLayout>
  );
};

export default Shipments;
