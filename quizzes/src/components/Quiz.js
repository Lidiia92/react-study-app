import React from "react";

const Smurf = props => {
  return (
      <div className="quiz">
          <h3>{props.quizz.title}</h3>
          <p>{props.quizz.author}</p>
          <p>{props.quizz.votes}</p>
          <p>{props.quizz.topic}</p>
      </div>
  );
};

export default Smurf;