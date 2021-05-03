import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";

import "../styles/style.scss";

//COMPONENTS
import {MainPage, PeoplePage, PlanetPage, StarshipPage} from "./pages";
import Header from "./header";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/people" component={PeoplePage} />
        <Route path="/planets" component={PlanetPage} />
        <Route path="/starships" component={StarshipPage} />
        <Route render={() => <h1>404 NOT FOUND</h1>} />
        <Redirect to={MainPage} />
      </Switch>
    </div>
  )
}

export default App;
