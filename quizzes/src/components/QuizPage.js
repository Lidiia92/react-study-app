import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import './css/Quizzes.css';
import styled from 'styled-components';
import '../pictures/cute-fox-vector.jpg';
import {Title} from './Quiz';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const QuizPageContainer = styled.div`
    background: #fff;
`;

const Avatar = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    object-position: 100% 0;
    margin-top: 20px;
    margin-bottom: 25px;
    border: 6px solid #e5ad00;
`;

const UserHeading = styled.div`
    background: #FFC100;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

`;

const UserSubHeading = styled.p`
    font-size: 3rem;
    font-weight: 700;
    margin-right: 10px;
    margin-top: 15px;
    color: #337ab7;
`;

const UserBody = styled.div`
    border: 20px solid #fff;
    border-radius: 2px;
    display: flex;
    align-items: stretch;
    height: 405px;
`;

const LeftDiv = styled.div`
    width: 30%;
    background: #fc5956;
`;

const RightDiv = styled.div`
    width: 70%;
    background: #f8f8f8;
    text-align: right;

    h3 {
        font-size: 4rem;
        font-weight: bold;
        padding-right: 25px;
    }

    p {
       
        padding-left: 150px;
        font-size: 2rem;
        font-weight: 200;
        font-family: 'Open Sans', sans-serif;
        text-align: justify;
        margin-top: 42px;
       
    }
`;

const HeaderContainer = styled.div`
    position: relative;
`;

const Header = styled.p`
    position: absolute;
    top: 50px;
    left: 380px;
    font-family: Arial, Helvetica,sans-serif;
    font-size: 9rem;
    font-weight: 900;
    color: black;
`;

const Dot = styled.span`
    height: 25px;
    width: 25px;
    background-color: #fc5956;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    top: 200px;
    left: 200px;
`;

const Contact = styled(FontAwesomeIcon)`
    font-size: 7rem;
    padding-right: 25px;
`;


class QuizPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            quiz: '', 
            author: ''
        }
    }

    componentDidMount() {
        axios.get(`https://lambda-study-app.herokuapp.com/api/quizzes/${this.props.match.params.quizId}`)
        .then(response => {
          console.log('reponse', response.data.author); 
          this.setState({quiz: response.data, author: response.data.author}) 
        })
        .catch(err => console.log(err));
    }


    render(){
        console.log('test 2', this.state.quiz);
        return (
            <QuizPageContainer >
                <UserHeading>
                    <UserSubHeading>Freelance Web Developer, React/Redux Wiz, Best Friend of JavaScript, Professional Cool Person.</UserSubHeading>
                    <Title className="title-shadow">{this.state.author.username}</Title>
                    {this.state.author.img_url ? (
                        <Avatar src={this.state.author.img_url} />
                    ) : (
                        <Avatar src="https://cdn5.vectorstock.com/i/1000x1000/86/59/cute-fox-vector-5988659.jpg" alt="Fox avatar"/>
                    )}
                </UserHeading>
                <UserBody>
                    <LeftDiv>
                        <HeaderContainer>
                            <Header>HE<br/>LLO<Dot></Dot></Header>
                        </HeaderContainer>
                    </LeftDiv>
                    <RightDiv>
                        <h3>About Me</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <Contact icon="envelope"/>
                        
                    </RightDiv>
                </UserBody>
            </QuizPageContainer>
        );
    }
}

export default QuizPage;