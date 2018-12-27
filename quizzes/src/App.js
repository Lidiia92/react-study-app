import React, { Component } from 'react';
import { Route, withRouter  } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import Jumbotron from './components/Jumbotron';
import NavBar from './components/NavBar';
import Quizzes from './components/Quizzes';
import QuizPage from './components/QuizPage';
import Topics from './components/Topics';
import SignUpForm from './components/SignUp';
import LogIn from './components/LogIn';
import { getQuizzes, addUser, fetchUserInfo } from './actions';
import './App.css';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faThumbsUp, faThumbsDown, faCat, faEnvelope, faGrinBeam, faUnlockAlt, faImages, faUserAstronaut} from '@fortawesome/free-solid-svg-icons';

library.add(faHeart, faThumbsUp, faThumbsDown, faCat, faEnvelope, fab, faGrinBeam, faUnlockAlt, faImages, faUserAstronaut);


// for testing in console
window.axios = axios;

class App extends Component {

  componentDidMount() {
    this.props.fetchUserInfo();
    this.props.getQuizzes();
  }


  render() {
    return (
      <div className="App">
          <NavBar users={this.props.users} isLogged={this.props.isLogged} user={this.props.user}/>
          <Route 
            exact 
            path="/"
            render={props => {
            return (
              <Jumbotron {...props}  />
            );
          
          }} />

          <Route 
            exact
            path="/api/quizzes"
            render={props => {
            return (
              <Quizzes {...props} quizzes={this.props.quizzes} />
            );
          
          }} />

          
          <Route 
          path="/api/quizzes/single-quiz/:quizId" 
          render={props => <QuizPage {...props} quizzes={this.props.quizzes} token={this.props.token}/> } /> 

          
          <Route 
          path="/api/quizzes/topics" 
          render={props => <Topics {...props} quizzes={this.props.quizzes}/> } /> 

          <Route 

          path="/api/auth/register" 
          render={props => <SignUpForm {...props} addUser={this.props.addUser} /> } /> 

          <Route 

          path="/api/auth/login" 
          render={props => <LogIn {...props} quizzes={this.props.quizzes} token={this.props.token} user={this.props.user} isLogged={this.props.isLogged}/> } /> 

      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('State in App.js', state);
  return {
    users: state.users,
    quizzes: state.quizzes,
    user: state.user,
    token: state.token,
    isLogged: state.isLogged

  };
}

function mapDispatchToProps(dispatch){
  return {
    getQuizzes: () => dispatch(getQuizzes()),
    addUser: newUser => dispatch(addUser(newUser)),
    fetchUserInfo: () => dispatch(fetchUserInfo())
  }
}

export default withRouter (
connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
);
