import React from "react";

const Jumbotron = ({item}) => {
  const {id, name, height, birth_year} = item;
  const IMG_URL = "https://starwars-visualguide.com/assets/img";

  return (
    <div className="swapi-jumbotron">
      <div className="swapi-jumbotron__head">
        <img src={`${IMG_URL}/characters/${id}.jpg`} alt="jumbotron img" className="swapi-jumbotron__img" />
      </div>
      <div className="swapi-jumbotron__body">
        <h2 className="swapi-jumbotron__title">Name : {name}</h2>
        <ul className="swapi-jumbotron__list p-0">
          <li className="swapi-jumbotron__list__item">Height : {height}</li>
          <li className="swapi-jumbotron__list__item">Birth Year : {birth_year}</li>
        </ul>
      </div>
    </div>
  )
}

export default Jumbotron;
