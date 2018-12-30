import {
    FETCH_QUIZZES_START,
    FETCH_QUIZZES_SUCCESS,
    FETCH_QUIZZES_FAILURE,

    ADD_USER_START,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE,

    FETCH_USER_FROM_STORAGE_START,
    FETCH_USER_FROM_STORAGE_SUCCESS,
    FETCH_USER_FROM_STORAGE_FAILURE,

    DELETE_QUIZ_START,
    DELETE_QUIZ_SUCCESS,
    DELETE_QUIZ_FAILURE,

    ADD_QUIZ_START,
    ADD_QUIZ_SUCCESS,
    ADD_QUIZ_FAILURE,

    EDIT_QUIZ_START,
    EDIT_QUIZ_SUCCESS,
    EDIT_QUIZ_FAILURE,

  } from '../actions';
  
  const initialState = {
    quizzes: [],
    users: '',
    user: {
        username: 'SlyFox',
        email: 'random@gmail.com',
        password: 'qwerty',
        img_url: 'http://s1.1zoom.me/big0/883/Foxes_Snout_Glance_Whiskers_548306_1024x1024.jpg',
        
    },
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzYsImlhdCI6MTU0NTQzNDM5NSwiZXhwIjoxNTc2OTkxOTk1fQ.YmjGBZl-Tfn12IXGZ4g_L-RGy1njxCKKrV8xEDgl1fg',
    isLogged: false,
    fetchingQuizzes: false,
    addingUser: false,
    addingQuiz: false,
    deletingQuiz: false,
    editingQuiz: false,
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

      case FETCH_USER_FROM_STORAGE_START:
        return {
          ...state,
          isLogged: false
        };

      case FETCH_USER_FROM_STORAGE_SUCCESS:
        return {
          ...state,
          error: null,
          isLogged: true,
        };
  
      case FETCH_USER_FROM_STORAGE_FAILURE:
        return {
          ...state,
          isLogged: false,
          error: action.payload
        };
      
      case DELETE_QUIZ_START:
        return {
          ...state,
          deletingQuiz: true
        };
      case DELETE_QUIZ_SUCCESS:
        return {
          ...state,
          deletingQuiz: false,
          quizzes: action.payload
        };
      case DELETE_QUIZ_FAILURE:
        return{
          ...state,
          deletingQuiz: false,
          error: action.payload
        };
        
      case ADD_QUIZ_START:
        return {
          ...state,
          addingQuiz: true
        };
      case ADD_QUIZ_SUCCESS:
        return {
          ...state,
          addingQuiz: false,
          quizzes: [...state.quizzes, action.payload]
        };
      case ADD_QUIZ_FAILURE:
        return {
          ...state,
          addingQuiz: false,
          error: action.payload
        };

        case EDIT_QUIZ_START:
        return {
          ...state,
          editingQuiz: true
        };
      case EDIT_QUIZ_SUCCESS:
        return {
          ...state,
          editingQuiz: false,
          quizzes: [...state.quizzes, action.payload]
        };
      case EDIT_QUIZ_FAILURE:
        return {
          ...state,
          editingQuiz: false,
          error: action.payload
        };
     
      default:
        return state;
    }
  };
  
  export default quizzesReducer;