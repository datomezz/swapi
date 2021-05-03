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
    return  this._transformPerson(res);
  }

  _transformPerson = (object) => {
    const {name, birth_year, height} = object;
    const id = this._extractId(object);

    return {id, name, birth_year, height}
  }

  _extractId = (object) => {
    const {url} = object;
    console.log(url);
    
    const regEx = /\/([0-9]*)\/$/;
    console.log("match", url.match(regEx));
    return url.match(regEx)[1];
  }
}
