import {
    FETCH_QUIZZES_START,
    FETCH_QUIZZES_SUCCESS,
    FETCH_QUIZZES_FAILURE,

    ADD_USER_START,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE,
  
  } from '../actions';
  
  const initialState = {
    quizzes: [],
    users: '',
    user: {
        username: 'SlyFox',
        email: 'random@gmail.com',
        password: 'qwerty',
        img_url: 'http://s1.1zoom.me/big0/883/Foxes_Snout_Glance_Whiskers_548306_1024x1024.jpg',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzYsImlhdCI6MTU0NTQzNDM5NSwiZXhwIjoxNTc2OTkxOTk1fQ.YmjGBZl-Tfn12IXGZ4g_L-RGy1njxCKKrV8xEDgl1fg',
    },

    fetchingQuizzes: false,
    addingUser: false,
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

      case ADD_USER_START:
        return {
          ...state,
          addingUser: true
        };
      case ADD_USER_SUCCESS:
        return {
          ...state,
          addingUser: false,
          users: action.payload
        };
      case ADD_USER_FAILURE:
        return {
          ...state,
          addingUser: false,
          error: action.payload
        };
     
      default:
        return state;
    }
  };
  
  export default quizzesReducer;