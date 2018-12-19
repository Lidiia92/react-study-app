import React from "react";
import Quiz from './Quiz';
import './css/Quizzes.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const QuizzesContainer = styled.div`
  background: #fef4da;
  height: 100%;
  display: flex;
  justify-content: flex-end;
 
  
`;

const QuizzesFlex = styled.div`
  width: 700px;
`;

const QuizzesHeading = styled.div`
  width: 500px;
  margin-top: 200px;
  font-family: 'Fredericka the Great', cursive;
  font-size: 6rem;
  text-align: center;
  position: fixed;
  top: 30px;
  left: 100px;
`;

const SubHeader = styled.span`
    color: #e34262;
`;

const Quizzes = props => {
  return (
    <QuizzesContainer>
      <QuizzesHeading>Ohaai want to know more about the quizz? <br /> <SubHeader>Click the Topic! </SubHeader><FontAwesomeIcon icon="cat"/></QuizzesHeading>
      <QuizzesFlex>
        {props.quizzes.map(quizz => {
        return <Quiz key={quizz.id} quizz={quizz} />;
        })}
      </QuizzesFlex> 
    </QuizzesContainer>
  );
};

export default Quizzes;