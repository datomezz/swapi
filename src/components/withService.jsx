import React from "react";

import {Consumer as ServiceConsumer} from "./context";

const withService = (Wrapper) => {
  return (props) => {
    return (
      <ServiceConsumer>
        {
          (swapiService) => {
            return <Wrapper {...props} swapiService={swapiService} />
          }
        }
      </ServiceConsumer>
    )
  }
}

export default withService;
