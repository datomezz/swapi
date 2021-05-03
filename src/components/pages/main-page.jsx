import React, {useEffect} from "react";
import {connect} from "react-redux";
import {FETCH_JUMBOTRON_REQUEST, FETCH_JUMBOTRON_SUCCESS, FETCH_JUMBOTRON_FAILURE} from "../../actions";
import withService from "../withService";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import Jumbotron from "../jumbotron";

const MainPage = ({swapiService, loading, error, jumbotron, fetchJumbotron}) => {
  
  useEffect(() => {
    fetchJumbotron();
    let interval = setInterval(() => {
      fetchJumbotron();
    }, 10000);

    return () => {
      clearInterval(interval);
    }
  }, [])

  const jumbotronContainer = loading ? <Spinner /> : <Jumbotron item={jumbotron} />

  if(error) {
    return <ErrorIndicator />
  }

  return (
    
    <div className="d-flex justify-content-center">
      {jumbotronContainer}
    </div>
  )
}

const mapStateToProps = ({loading, error, jumbotron}) => {
  return {loading, error, jumbotron}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchJumbotron : () => {
      const {swapiService} = ownProps;
      const rand = ~~(Math.random() * 10) + 1;

      dispatch(FETCH_JUMBOTRON_REQUEST());

      swapiService.getPerson(rand)
        .then((data) => {
          console.log(data, "data");
          dispatch(FETCH_JUMBOTRON_SUCCESS(data));
        })
        .catch((err) => dispatch(FETCH_JUMBOTRON_FAILURE()));

    }
  }
}

export default withService(connect(mapStateToProps, mapDispatchToProps)(MainPage));
