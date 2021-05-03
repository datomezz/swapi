const initialState = {
  planetList : [],
  navList : [
    {id : 0, label : "people", title : "People"},
    {id : 1, label : "planets", title : "Planets"},
    {id : 3, label : "starships", title : "Starships"},
  ],
  jumbotron : {},
  loading : false,
  error : false
}

const fetchPlanetList = (state, payload) => {
  return {
    ...state,
    planetList : payload
  }
}

const reducer = (state = initialState, action) => {
  
  switch(action.type) {
    case "TEST" :
      return state;
    case "FETCH_PLANET_LIST" : 
      return fetchPlanetList(state, action.payload);
    case "FETCH_JUMBOTRON_REQUEST" :
      return {
        ...state,
        loading : true,
        error : false
      }
    case "FETCH_JUMBOTRON_SUCCESS" :
      return {
        ...state,
        loading : false,
        error : false,
        jumbotron : action.payload
      }
    case "FETCH_JUMBOTRON_ERROR" :
      return {
        ...state,
        loading : false,
        error : true,
      }
    default :
      return state;
  }
}

export default reducer;
