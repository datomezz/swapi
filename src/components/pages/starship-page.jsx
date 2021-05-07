import React from "react";
import withService from "../withService";

import Jumbotron from "../jumbotron";

const StarshipPage = ({swapiService}) => {

  const method = (swapiService) => {
    const rand = ~~(Math.random() * 7) + 2;
    return swapiService.getStarship(rand);
  }

  return (
    <div className="d-flex justify-content-center">
      <Jumbotron imgType={"starships"} method={() => method(swapiService)} />
    </div>
  )
}

export default withService(StarshipPage);
