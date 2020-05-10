import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { ThemeProvider } from "react-jss";

import configStore, { history } from "store";
import theme from "assets/theme.json";
import App from "features/app";
import { localPersist } from "services";

import * as serviceWorker from "./serviceWorker";

import "assets/global.scss";

const bootstrap = async () => {
  const preloadedState = {
    shipments: { shipmentsList: localPersist.loadShipments(), searchTerm: "" },
  };
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={configStore({ preloadedState })}>
        <ConnectedRouter history={history} noInitialPop>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </ConnectedRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};
bootstrap();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
