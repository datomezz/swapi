import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {
  FETCH_JUMBOTRON_THUNK, 
  FETCH_JUMBOTRON_REQUEST, 
  FETCH_JUMBOTRON_SUCCESS, 
  FETCH_JUMBOTRON_FAILURE} from "../actions";

import Spinner from "./spinner";
import ErrorIndicator from "./error-indicator";

const Jumbotron = ({method, imgType}) => {
  const {jumbotron} = useSelector(({jumbotron}) => ({jumbotron}));
  const dispatch = useDispatch();
  const fetchJumbotron = (method) => dispatch(FETCH_JUMBOTRON_THUNK(method));

  const {list, error, loading} = jumbotron;
  const IMG_URL = `https://starwars-visualguide.com/assets/img/${imgType}/`;

  useEffect(() => {
    fetchJumbotron(method);
    let interval = setInterval(() => fetchJumbotron(method) , 3000);

    return () => {
      clearInterval(interval);
    }
  }, []);

  if(error) {
    return <ErrorIndicator />
  }

  if(loading) {
    return <Spinner />
  }

  const listArr = Object.entries(list);

  return (
    <div className="swapi-jumbotron">
      <div className="swapi-jumbotron__head">
        <img src={`${IMG_URL + list.id}.jpg`} alt="jumbotron img" className="swapi-jumbotron__img" />
      </div>
      <div className="swapi-jumbotron__body">
        <h2 className="swapi-jumbotron__title">Name : {list.Name}</h2>
        <ul className="swapi-jumbotron__list p-0">
          {

            listArr.map(item => {
              if(item[0] !== "id") {
                return <li className="swapi-jumbotron__list__item">{item[0]} : {item[1]}</li>
              }
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Jumbotron;
