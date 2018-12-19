import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import Jumbotron from './components/Jumbotron';
import NavBar from './components/NavBar';
import Quizzes from './components/Quizzes';
import { getQuizzes } from './actions';
import './App.css';

// for testing in console
window.axios = axios;

class App extends Component {

  componentDidMount() {
    this.props.getQuizzes();
  }

  render() {
    return (
      <div className="App">
          <NavBar />
          <Route 
            exact 
            path="/"
            render={props => {
            return (
              <Jumbotron {...props}  />
            );
          
          }} />

          <Route 
   
            path="/api/quizzes"
            render={props => {
            return (
              <Quizzes {...props} quizzes={this.props.quizzes} />
            );
          
          }} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('State in App.js', state);
  return {
    quizzes: state.quizzes,
    getQuizzes: state.getQuizzes,
    
  };
}

function mapDispatchToProps(dispatch){
  return {
    getQuizzes: () => dispatch(getQuizzes()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

