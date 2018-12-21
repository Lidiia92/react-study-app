import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './css/Quizzes.css';
import styled from 'styled-components';



const TopicsHeader = styled.div`
    display: flex;
    align-items: stretch;
    height: 92vh;

`;

const RightDiv = styled.div`
    width: 40%;
    background-image: linear-gradient(to bottom right, rgba( 0, 47, 75, .5), rgba( 220, 66, 37, .5)), url("https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80");  
    background-repeat: no-repeat;
    background-size: cover;

`;

const LeftDiv = styled.div`
    width: 60%;
    background: #f8f8f8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        margin-bottom: 20px;
        font-size: 3rem;
        font-family: 'Fredericka the Great', cursive;
    }
`;

const TopicsColumn = styled.div`
    margin-top: 40px;
    width: 400px;
    margin: 0 auto;
`;

const TopicContent = styled.div`
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 10px;
`;

const LogoReact = styled.img`
    width: 220px;
    height: 150px;
    border-radius: 50%;
`;

const LogoJS =styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
`;

const LogoVue =styled.img`
    width: 150px;
    height: 120px;
    margin-left: 40px;
`;

const Topics = props => {
 const topics = [];
 props.quizzes.forEach(quizz => {
     if(!topics.includes(quizz.topic)){
         topics.push(quizz.topic);
     }
 });
  return (
    <div>
        <TopicsHeader>
            <LeftDiv>
                <div>
                    <LogoReact src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png"/>
                    <LogoJS src="http://evilbits.io/static/javascript.bcb36bfb.png"/>
                    <LogoVue src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"/>
                </div>
                <p>TOP TRENDING QUIZZES TOPICS IN FSW15 RIGHT NOW</p>
                <TopicsColumn>{topics.map(topic => <TopicContent key={topic.id} >#{topic}</TopicContent>)}</TopicsColumn>
               
            </LeftDiv>
            <RightDiv>
                
            </RightDiv>
        </TopicsHeader>
    </div>
  );
};

export default Topics;