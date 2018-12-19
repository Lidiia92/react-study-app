import {
    FETCH_QUIZZES_START,
    FETCH_QUIZZES_SUCCESS,
    FETCH_QUIZZES_FAILURE,
  
  } from '../actions';
  
  const initialState = {
    quizzes: [],
    fetchingQuizzes: false,
    error: null
  };
  
  const quizzesReducer = (state = initialState, action) => {
    switch (action.type) {

      case FETCH_QUIZZES_START:
      console.log('Fetching quizzes start - state', state)
        return {
          ...state,
          fetchingQuizzes: true
        };
      case FETCH_QUIZZES_SUCCESS:
        return {
          ...state,
          error: null,
          fetchingQuizzes: false,
          quizzes: action.payload
        };
  
      case FETCH_QUIZZES_FAILURE:
        return {
          ...state,
          fetchingQuizzes: false,
          error: action.payload
        };
     
      default:
        return state;
    }
  };
  
  export default quizzesReducer;