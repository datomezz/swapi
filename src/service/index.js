export default class SwapiService {
  _url = "https://swapi.dev/api/";

  getData = async (url) => {
    const res = await fetch(`${this._url + url}/`);
    return await res.json();
  }

  getPeople = async (route) => {
    const res = await this.getData("people");
    return res.results;
  }

  getPerson = async (id) => {
    const res = await this.getData(`people/${id}`);
    return this._transformPerson(res);
  }

  getPlanet = async (id) => {
    const res = await this.getData(`planets/${id}`);
    return this._transformPlanet(res);
  }

  getStarship = async (id) => {
    const res = await this.getData(`starships/${id}`);
    return this._transformStarship(res);
  }

  _transformStarship = (object) => {
    const {name, model, crew, length} = object;
    const id = this._extractId(object);

    return {id, Name : name, Model : model, Crew : crew, Length : length}
  }

  _transformPlanet = (object) => {
    const {name, rotation_period, diameter, population} = object;
    const id = this._extractId(object);

    return {
      id,
      Name : name,
      RotationPeriod : rotation_period,
      Diameter : diameter,
      Population : population
    }
  }

  _transformPerson = (object) => {
    const {name, birth_year, height} = object;
    const id = this._extractId(object);

    return {id, Name : name, BirthYear : birth_year, Height : height}
  }

  _extractId = (object) => {
    const {url} = object;
    
    const regEx = /\/([0-9]*)\/$/;
    return url.match(regEx)[1];
  }
}
