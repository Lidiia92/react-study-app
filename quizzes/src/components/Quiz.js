import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import './css/Quizzes.css';

const Quiz = styled.div`
    max-width: 600px;
    border-radius: 2px;
    transition: all .2s ease-in-out;
    margin-top: 25px;
    padding-bottom: 2px;
    flex: 0 50%;
    
    &:hover {
        transform: scale(1.1);
    }


    &:nth-child(even){
        background: #bfe5ec;
        margin-left: 50px;
        filter: drop-shadow(0 0 0.75rem #628388);
        h3 {
            background: #a4dbe4;
        
        }
    }

    &:nth-child(odd){
        background: #fedb7e;
        filter: drop-shadow(0 0 0.75rem #987a2a);
        h3 {
            background: #fecc47;
        }
    }
`;


export const Title = styled.h3`
    margin: 0;
    padding-top: 8px;
    font-size: 4rem;
    font-family: 'Fredericka the Great', cursive;
    text-align: center;
    text-transform: uppercase;
    outline: none;

    &:focus {
    outline: none;
    }

    &:active {
    outline: none;
    }

`;

const Author = styled.p`
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    border-bottom: 1px solid rgba(128, 128, 128, .4);
    margin-top: 12px;
`;

const AwesomeIcon = styled.span`
    margin-left: 4px;
`;

export const HeartRed = styled(FontAwesomeIcon)`
    color: #ff3232;
`;

const Votes = styled.p`
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
`;

const ThumbsUp = styled(FontAwesomeIcon)`
    margin-left: 10px;
    color: rgba(102, 178, 102, .7);
    cursor: pointer;
`;

const ThumbsDown = styled(FontAwesomeIcon)`
    margin-right: 14px;
    color: rgba(153, 153, 153, .5);
    cursor: pointer;
`;

const Topic = styled.p`
    font-size: 2.8rem;
    text-align: right;
    font-weight: 700;
    margin-right: 10px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;

    &:hover{
        text-decoration: none;  
    }

    &:active{
        text-decoration: none; 
    }
    &:focus {
        text-decoration: none; 
    }
`;

//Component

class QuizComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        votes: props.quizz.votes, 
        vote: false,
    }
  }

    handleLikeUp = (votes) => {
        let votesNum = this.state.votes;
        if (votes === votesNum){
            votesNum++
        }
        this.setState({
            votes: votesNum
        })
    }

    handleLikeDown = (votes) => {
        let votesNum = this.state.votes;
        if (votes !== votesNum){
            votesNum--
        }
        this.setState({
            votes: votesNum
        })
    }

  render(){
    console.log('quizzid', this.props.quizz.id);
    return (
        <div>
                <img src="https://www.sunset.com/wp-content/uploads/97cc1a4f0006ff15aca8dc3a0d01860d-800x0-c-default.jpg"/>
                {/* <Title>{this.props.quizz.title}</Title>

                <StyledLink  to={`/api/quizzes/single-quiz/${this.props.quizz.id}`}>
                    <Author>Made By: {this.props.quizz.author}<AwesomeIcon><HeartRed icon="heart" /></AwesomeIcon></Author>
                </StyledLink>
                <Votes><ThumbsDown onClick={() => this.handleLikeDown(this.props.quizz.votes)} icon="thumbs-down"/>{this.state.votes}<AwesomeIcon><ThumbsUp onClick={() => this.handleLikeUp(this.props.quizz.votes)} icon="thumbs-up" /></AwesomeIcon></Votes>
                <Topic>Topic: {this.props.quizz.topic} <FontAwesomeIcon icon="cat"/></Topic> */}
                <p className="legend">Legend 2</p>
        </div>
    );
  }
};

export default QuizComponent;