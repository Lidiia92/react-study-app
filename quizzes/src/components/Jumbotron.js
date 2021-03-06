import React, { Component } from 'react';
import '../App.css';
import AddNewQuiz from './AddNewQuiz';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './css/Quizzes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnchorLink from 'react-anchor-link-smooth-scroll'


export const QuizzesContainer = styled.div`
  height: 100%;
  margin-top: 90px;
`;


const QuizzesHeading = styled.div`
  font-size: 9rem;
  color: white;
  font-family: 'Poiret One', cursive;
  text-transform: uppercase;
  letter-spacing: .5rem;
  text-align: center;
  text-shadow:   0px 3px 0px #1f3e5a,
                 0px 14px 10px rgba(0,0,0,0.15),
                 0px 24px 2px rgba(0,0,0,0.1),
                 0px 34px 30px rgba(0,0,0,0.1);
`;

const SubHeader = styled.p`
    max-width: 1200px;
    padding-left: 15px;
    padding-right: 15px;
    letter-spacing: .4rem;
    font-family: 'Poiret One', cursive;
    font-size: 4rem;
    color: #eee;
    background-image: linear-gradient(to right top, #1c253c, #25233c, #2e213a, #351e36, #3c1c31);
    opacity: .6;
    border-radius: 3px;
    filter: drop-shadow(0 5mm 4mm rgba(28, 37, 60, 1));
`;

const ButtonsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

export const Topics = styled(Link)`
  border: 2px solid rgba(204, 204, 204, .5);
  font-family: 'Poiret One', cursive;
  font-size: 2.2rem;
  color: rgba(204, 204, 204, 1);
  text-transform: uppercase;
  padding-top: 6px;
  padding-bottom: 6px;
  width: 200px;
  text-align: center;
  text-decoration: none;
  border-radius: 2px;
  filter: drop-shadow(0 0 0.75rem #1c253c);

  &:hover {
    text-decoration: inherit;
    color: rgba(204, 204, 204, 1);
    background: rgba(249, 249, 249, .05);
  }

  &:focus {
    text-decoration: inherit;
    color: inherit;
  }
`;

const QuizzWrapper = styled.div`
  position: relative;
`;

const QuizAdded = styled.h2`
  font-family: 'Poiret One', cursive;
  font-size: 7rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.1rem;
  font-weight: bold;
  color: #4c1f4c;
`;
class JumbotronComponent extends Component {
    constructor(props) {
        super(props);
    }

  render(){
    return (
        <div>
          <div className="quizzes-background">
            <QuizzesHeading>Lambda Quizzes </QuizzesHeading>
            <SubHeader>Outstanding Quizzes by Outstanding people </SubHeader>
            <ButtonsContainer>
              <Topics  to={`/api/quizzes/topics`}>Topics</Topics>
              <AnchorLink  className="add-quizz" href="#add-quiz">Add Quizz</AnchorLink>
            </ButtonsContainer>
          </div>
          <AddNewQuiz token={this.props.token} addQuiz={this.props.addQuiz}/>
        </div>
      );
  }

};

export default JumbotronComponent;