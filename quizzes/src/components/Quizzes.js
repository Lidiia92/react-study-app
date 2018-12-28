import React from "react";
import '../App.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './css/Quizzes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const QuizzesContainer = styled.div`
  position: fixed;
  width: 980px;
  top: 0px;
  bottom: 0;
  background-color: #fff;
  left: 50%;
  margin-left: -28.5%;
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

const Heading = styled.h1`
  margin-top: 100px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  font-size: 5rem;
  margin-bottom: 40px;
`;

const SliderWrapper = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

`;

const Quizzes = props => {
  return (
    <div className="quizPage-background">
        <QuizzesContainer>
          <SliderWrapper>
            <Heading>Lambda Quizzes</Heading>
            <Carousel className="carousel-custom">
                {props.quizzes.length && props.quizzes.map(quizz => {
                return (
                  <QuizzWrapper key={quizz.id}>
                      <img src="https://images.unsplash.com/photo-1467131825866-8e0a12d12448?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1061&q=80" id="slider"/>
                        <div id="legend" className="legend">
                          <h4>{quizz.title}</h4>
                          <p className="topic">Topic: {quizz.topic}</p>
                          <Link  to={`/api/quizzes/single-quiz/${quizz.id}`} className="btn-slider">
                            Learn more
                          </Link>
                        </div>  
                  </QuizzWrapper> 
                );
                })}
              </Carousel>
          </SliderWrapper>
      </QuizzesContainer>
    </div>
  );
};

export default Quizzes;