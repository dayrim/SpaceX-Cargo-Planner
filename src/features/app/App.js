import React from "react";
import { Route } from "react-router-dom";

import Shipments from "features/shipments";

const App = () => {
  return (
    <div className="App">
      <Route path="/">
        <Shipments></Shipments>
      </Route>
    </div>
  );
};

export default App;
