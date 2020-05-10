import { createBrowserHistory } from "history";
import { routerMiddleware as createRouterMiddleware } from "connected-react-router";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";

import rootReducer from "./root-reducer";
import rootEpic from "./root-epic";

export const history = createBrowserHistory();

export default ({ preloadedState = {} } = {}) => {
  const epicMiddleware = createEpicMiddleware();
  const routerMiddleware = createRouterMiddleware(history);
  const defaultMiddleware = getDefaultMiddleware({ thunk: false });

  const middleware = [routerMiddleware, epicMiddleware, ...defaultMiddleware];

  const store = configureStore({
    reducer: rootReducer(history),
    preloadedState,
    devTools: {
      name: "SpaceX Cargo Planner",
      trace: true,
      traeLimit: 30,
    },
    middleware,
  });

  /* Enable Webpack hot module replacement for reducers */
  if (module.hot) {
    module.hot.accept("./root-reducer", () => {
      const nextReducer = require("./root-reducer").default;

      store.replaceReducer(nextReducer);
    });
  }
  epicMiddleware.run(rootEpic);
  return store;
};
