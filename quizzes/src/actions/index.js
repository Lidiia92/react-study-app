import axios from 'axios';

export const FETCH_QUIZZES_START = 'FETCH_QUIZZES_START';
export const FETCH_QUIZZES_SUCCESS = 'FETCH_QUIZZES_SUCCESS';
export const FETCH_QUIZZES_FAILURE = 'FETCH_QUIZZES_FAILURE';

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