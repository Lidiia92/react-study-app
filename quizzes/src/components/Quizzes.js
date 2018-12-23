import React from "react";
import Quiz from './Quiz';
import {HeartRed} from './Quiz';
import './css/Quizzes.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {StyledLink} from './Quiz';


export const QuizzesContainer = styled.div`
  background: #fef4da;
  height: 100%;
  display: flex;
  justify-content: flex-end;

 
  
`;

const QuizzesFlex = styled.div`
  width: 700px;
`;

const QuizzesHeading = styled.div`
  width: 400px;
  height: 400px;
  margin-top: 200px;
  font-family: 'Reenie Beanie', cursive;
  font-size: 4.5rem;
  text-align: center;
  position: fixed;
  top: 30px;
  left: 100px;
  background:#ccf;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 30px;
  box-shadow: 5px 5px 7px rgba(33,33,33,.7);
  transform:rotate(-5deg);
  border-radius: 3px;
`;

const SubHeader = styled.span`
    color: #e34262;
`;

const Quizzes = props => {
  return (
    <div className="quizzes-background">
      <QuizzesContainer>
        <QuizzesHeading>Ohaai, want to meet quiz author? <br /> <SubHeader>Click the Username! <br /> </SubHeader><HeartRed icon="heart"/></QuizzesHeading>
        <QuizzesHeading className="sticky-mint">Want to know trending quiz topics? Click here!<br />
          <StyledLink  className="large-font" to={`/api/quizzes/topics`}>Topics</StyledLink>
        </QuizzesHeading>
        <QuizzesFlex>
          {props.quizzes.map(quizz => {
          return <Quiz key={quizz.id} quizz={quizz} />;
          })}
        </QuizzesFlex> 
    </QuizzesContainer>
    </div>

  );
};

export default Quizzes;