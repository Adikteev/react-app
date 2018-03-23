import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { Route } from "react-router";

import Login from "./routes/login";
import Explorer from "./routes/explorer";
import Dashboard from "./routes/dashboard";

import { history, store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Explorer} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
