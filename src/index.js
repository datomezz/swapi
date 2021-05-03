import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import {Provider as ServiceProvider} from "./components/context";

import SwapiService from "./service";

import App from "./components/app";

const swapiService = new SwapiService();

ReactDOM.render(
  <Provider store={store}>
    <ServiceProvider value={swapiService}>
      <Router>
        <App />
      </Router>
    </ServiceProvider>
  </Provider>
  , document.getElementById("root"));
