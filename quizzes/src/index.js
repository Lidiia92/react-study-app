import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { BrowserRouter as Router} from 'react-router-dom';


// This is the most basic reducer. A function that returns and object. Replace it.
//Be sure to throw in the proper middlewares
const store = createStore(
  rootReducer, 
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  document.getElementById('root')
);

