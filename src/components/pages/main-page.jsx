import React, {useEffect} from "react";
import withService from "../withService";

import Jumbotron from "../jumbotron";

const MainPage = ({swapiService}) => {

  const method = (swapiService) => {
    const rand = ~~(Math.random() * 10) + 2;
    return swapiService.getPerson(rand);
  }

  return (
    <div className="d-flex justify-content-center">
      <Jumbotron imgType={"characters"} method={() => method(swapiService)} />
    </div>
  )
}

export default withService(MainPage);
