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

export const DELETE_QUIZ_START = 'DELETE_QUIZ_START';
export const DELETE_QUIZ_SUCCESS = 'DELETE_QUIZ_SUCCESS';
export const DELETE_QUIZ_FAILURE = 'DELETE_QUIZ_FAILURE';

export const ADD_QUIZ_START = 'ADD_QUIZ_START';
export const ADD_QUIZ_SUCCESS = 'ADD_QUIZ_SUCCESS';
export const ADD_QUIZ_FAILURE = 'ADD_QUIZ_FAILURE';


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

  export const deleteQuiz = (quizId, token) => dispatch => {
    dispatch({ type: DELETE_QUIZ_START });
    axios({
      method: 'delete',
      url: `https://lambda-study-app.herokuapp.com/api/quizzes/${quizId}`,
      headers: {
        Authorization: token
      }
    })
      .then(response => {
        console.log('Deleting the quiz', response);
        dispatch({ type: DELETE_QUIZ_SUCCESS, payload: response.data });
      })
      .catch(err => dispatch({ type: DELETE_QUIZ_FAILURE, payload: err }));
  };


  export const addQuiz = (newQuiz, token) => dispatch => {
    dispatch({ type: ADD_QUIZ_START });
    axios({
      method: 'post',
      url: `https://lambda-study-app.herokuapp.com/api/quizzes/`,
      data: newQuiz,
      headers: {
        Authorization: token
      }

    })
      .then(response => {
        console.log('Adding new Quiz', response);
        dispatch({
          type: ADD_QUIZ_SUCCESS,
          payload: {...newQuiz, id: response.data}
        });
      })
      .catch(err => dispatch({ type: ADD_QUIZ_FAILURE, payload: err }));
  };

