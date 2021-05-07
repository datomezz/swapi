const initialState = {
  planetList : [],
  navList : [
    {id : 0, label : "people", title : "People"},
    {id : 1, label : "planets", title : "Planets"},
    {id : 3, label : "starships", title : "Starships"},
  ],
  jumbotron : {
    loading : true,
    error : false,
    list : {}
  },
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
        jumbotron : {
          loading : true,
          error : false,
          list : {}
        }
      }
    case "FETCH_JUMBOTRON_SUCCESS" :
      return {
        ...state,
        jumbotron : {
          loading : false,
          error : false,
          list : action.payload
        }
      }
    case "FETCH_JUMBOTRON_ERROR" :
      return {
        ...state,
        jumbotron : {
          loading : false,
          error : true,
          list : {}
        }
      }
    default :
      return state;
  }
}

export default reducer;
