const FETCH_JUMBOTRON_REQUEST = () => ({type : "FETCH_JUMBOTRON_REQUEST"});
const FETCH_JUMBOTRON_SUCCESS = (payload) => ({type : "FETCH_JUMBOTRON_SUCCESS", payload});
const FETCH_JUMBOTRON_FAILURE = () => ({type : "FETCH_JUMBOTRON_FAILURE"});

export {
  FETCH_JUMBOTRON_REQUEST,
  FETCH_JUMBOTRON_SUCCESS,
  FETCH_JUMBOTRON_FAILURE
}

export const FETCH_JUMBOTRON_THUNK = (method) => {
  return (dispatch) => {
    dispatch(FETCH_JUMBOTRON_REQUEST());
    
    method()
      .then((data) => {
        dispatch(FETCH_JUMBOTRON_SUCCESS(data));
      })
      .catch((err) => dispatch(FETCH_JUMBOTRON_FAILURE()));

  }
}
