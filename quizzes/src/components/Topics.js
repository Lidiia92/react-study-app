import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './css/Quizzes.css';
import styled from 'styled-components';



const TopicsHeader = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    /* background-image: linear-gradient(to bottom right, rgba( 0, 47, 75, .5), rgba( 220, 66, 37, .5)); */
    background: linear-gradient(180deg,rgba(0,0,0,.38) 0,rgba(0,0,0,.38) 3.5%,rgba(0,0,0,.379) 7%,rgba(0,0,0,.377) 10.35%,rgba(0,0,0,.375) 13.85%,rgba(0,0,0,.372) 17.35%,rgba(0,0,0,.369) 20.85%,rgba(0,0,0,.366) 24.35%,rgba(0,0,0,.364) 27.85%,rgba(0,0,0,.361) 31.35%,rgba(0,0,0,.358) 34.85%,rgba(0,0,0,.355) 38.35%,rgba(0,0,0,.353) 41.85%,rgba(0,0,0,.351) 45.35%,rgba(0,0,0,.35) 48.85%,rgba(0,0,0,.353) 52.35%,rgba(0,0,0,.36) 55.85%,rgba(0,0,0,.371) 59.35%,rgba(0,0,0,.385) 62.85%,rgba(0,0,0,.402) 66.35%,rgba(0,0,0,.42) 69.85%,rgba(0,0,0,.44) 73.35%,rgba(0,0,0,.46) 76.85%,rgba(0,0,0,.48) 80.35%,rgba(0,0,0,.498) 83.85%,rgba(0,0,0,.515) 87.35%,rgba(0,0,0,.529) 90.85%,rgba(0,0,0,.54) 94.35%,rgba(0,0,0,.547) 97.85%,rgba(0,0,0,.55));
    justify-content: center;

`;

const Wrapper = styled.div`
    width: 1024px;
`;

const Heading = styled.div`
    color: #eee;
    font-size: 6rem;
    font-weight: bold;

`;

const SubHeading = styled.h3`
    color: #eee;
    margin-bottom: 30px;
`;

const TopicsHeading = styled.h4`
    margin-top: 30px;
    color: #eee;
    font-size: 2rem;
`;

const Topic = styled.div`
    display: inline-block;
    margin-right: 5px;
    margin-bottom: 5px;
    color:#ffdfe5;
    font-size: 1.6rem;
    font-weight: 500;
    

`;




const Topics = props => {
 const topics = [];
 props.quizzes.forEach(quizz => {
     if(!topics.includes(quizz.topic)){
         topics.push(quizz.topic);
     }
 });
 console.log('topics', topics);
  return (
    <div className="signup-background">
        <TopicsHeader>
            <Wrapper>
                <Heading>Topics</Heading>
                <SubHeading><p>Amazing, free quizzes.</p>
                    Gifted by the world’s most generous community of quiz makers. <FontAwesomeIcon icon="gift"/></SubHeading>
                    <Link className="transparent-btn topics-small purple-bg" to="/api/quizzes">Quizzes</Link>  
                <TopicsHeading>Trending quiz topics: </TopicsHeading>   
                {topics.map(topic => <Topic>{topic}, </Topic>)}
            </Wrapper>
        </TopicsHeader>
    </div>
  );
};

export default Topics;