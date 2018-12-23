import axios from 'axios';

export const FETCH_QUIZZES_START = 'FETCH_QUIZZES_START';
export const FETCH_QUIZZES_SUCCESS = 'FETCH_QUIZZES_SUCCESS';
export const FETCH_QUIZZES_FAILURE = 'FETCH_QUIZZES_FAILURE';

export const ADD_USER_START = 'ADD_USER_START';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAILURE = 'ADD_USER_FAILURE';

export const FETCH_USER_FROM_STORAGE_START = "FETCH_USER_FROM_STORAGE_START";
export const FETCH_USER_FROM_STORAGE_SUCCESS = "FETCH_USER_FROM_STORAGE_SUCCESS";
export const FETCH_USER_FROM_STORAGE_FAILURE = "FETCH_USER_FROM_STORAGE_FAILURE";


export const getQuizzes = () => dispatch => {
    dispatch({ type: FETCH_QUIZZES_START });
    axios
      .get('https://lambda-study-app.herokuapp.com/api/quizzes')
      .then(response => {
        console.log('Fetch quizzes finished', response);
        dispatch({ type: FETCH_QUIZZES_SUCCESS, payload: response.data });
      })
      .catch(err => dispatch({ type: FETCH_QUIZZES_FAILURE, payload: err }));
  };

export const addUser = newUser => dispatch => {
    dispatch({ type: ADD_USER_START });
    axios
      .post('https://lambda-study-app.herokuapp.com/api/auth/register', newUser)
      .then(response => {
        console.log('Adding user', response);
        dispatch({
          type: ADD_USER_SUCCESS,
          payload: response.data
        });
      })
      .catch(err => dispatch({ type: ADD_USER_FAILURE, payload: err }));
  }; 

  export const fetchUserInfo = () => dispatch =>{
    const errMessage = 'Please Log in'
    dispatch({type: FETCH_USER_FROM_STORAGE_START});

    const storedUserinfo = JSON.parse(localStorage.getItem('userinfo'));
    if (storedUserinfo) {
      dispatch({type: FETCH_USER_FROM_STORAGE_SUCCESS, payload: storedUserinfo})
    } else {
      dispatch({ type: FETCH_USER_FROM_STORAGE_FAILURE, payload: errMessage})
    }
  };