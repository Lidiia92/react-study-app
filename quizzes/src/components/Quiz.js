import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



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

const Title = styled.h3`
    margin: 0;
    padding-top: 8px;
    font-size: 4rem;
    font-family: 'Fredericka the Great', cursive;
    text-align: center;
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

const HeartRed = styled(FontAwesomeIcon)`
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
    return (
        <Quiz>
            <Accordion>
                <AccordionItem>
                    <AccordionItemTitle>
                        <Title>{this.props.quizz.title}</Title>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <Author>Made By: {this.props.quizz.author}<AwesomeIcon><HeartRed icon="heart" /></AwesomeIcon></Author>
                        <Votes><ThumbsDown onClick={() => this.handleLikeDown(this.props.quizz.votes)} icon="thumbs-down"/>{this.state.votes}<AwesomeIcon><ThumbsUp onClick={() => this.handleLikeUp(this.props.quizz.votes)} icon="thumbs-up" /></AwesomeIcon></Votes>
                        <Topic>Topic: {this.props.quizz.topic} <FontAwesomeIcon icon="cat"/></Topic>
                    </AccordionItemBody>
                </AccordionItem>    
            </Accordion>
        </Quiz>
    );
  }
};

export default QuizComponent;