import React from "react";
import Quiz from './Quiz';
import './css/Quizzes.css';



const Quizzes = props => {
  return (
    <div className="quizzes">
        {props.quizzes.map(quizz => {
        return <Quiz key={quizz.id} quizz={quizz} />;
        })}
       
    </div>
  );
};

export default Quizzes;