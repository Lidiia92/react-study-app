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
import { getQuizzes, addUser, fetchUserInfo, deleteQuiz, addQuiz, editQuiz } from './actions';
import './App.css';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faThumbsUp, faThumbsDown, faCat, faEnvelope, faGrinBeam, faUnlockAlt, faImages, faUserAstronaut, faMarker, faStar, faEdit, faTrashAlt, faCode, faCommentAlt, faGift} from '@fortawesome/free-solid-svg-icons';

library.add(faHeart, faThumbsUp, faThumbsDown, faCat, faEnvelope, fab, faGrinBeam, faUnlockAlt, faImages, faUserAstronaut, faMarker, faStar, faEdit, faTrashAlt, faCode, faCommentAlt, faGift);


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
              <Jumbotron {...props} addQuiz={this.props.addQuiz} token={this.props.token} />
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
          render={props => <QuizPage {...props} quizzes={this.props.quizzes} token={this.props.token} deleteQuiz={this.props.deleteQuiz}
          editQuiz={this.props.editQuiz}
          /> } /> 

          
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
    isLogged: state.isLogged,
    deletingQuiz: state.deletingQuiz

  };
}

function mapDispatchToProps(dispatch){
  return {
    getQuizzes: () => dispatch(getQuizzes()),
    addUser: newUser => dispatch(addUser(newUser)),
    fetchUserInfo: () => dispatch(fetchUserInfo()),
    deleteQuiz: (quizId, token) => dispatch(deleteQuiz(quizId, token)),
    addQuiz: (newQuiz, token, event) => dispatch(addQuiz(newQuiz, token, event)),
    editQuiz: (updatedQuiz, quizId, token) => dispatch(editQuiz(updatedQuiz, quizId, token))
  }
}

export default withRouter (
connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
);
