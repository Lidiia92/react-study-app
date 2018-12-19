import React from "react";
import Quiz from './Quiz';
import './css/Quizzes.css';
import styled from 'styled-components';

const QuizzesContainer = styled.div`
  background: #fef4da;
  height: 100%;
  display: flex;
  justify-content: space-around;
 
  
`;

const QuizzesFlex = styled.div`
  width: 700px;
`;

const QuizzesHeading = styled.div`
  width: 300px;
  margin-top: 200px;
`;

const Quizzes = props => {
  return (
    <QuizzesContainer>
      <QuizzesHeading>More Quizzes </QuizzesHeading>
      <QuizzesFlex>
        {props.quizzes.map(quizz => {
        return <Quiz key={quizz.id} quizz={quizz} />;
        })}
      </QuizzesFlex> 
    </QuizzesContainer>
  );
};

export default Quizzes;