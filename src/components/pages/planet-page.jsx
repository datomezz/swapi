import React from "react";
import withService from "../withService";

import Jumbotron from "../jumbotron";

const PlanetPage = ({swapiService}) => {

  const method = (swapiService) => {
    const rand = ~~(Math.random() * 10) + 2;
    return swapiService.getPlanet(rand);
  }

  return (
    <div className="d-flex justify-content-center">
      <Jumbotron imgType={"planets"} method={() => method(swapiService)} />
    </div>
  )
}

export default withService(PlanetPage);
