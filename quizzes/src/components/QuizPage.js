import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import './css/Quizzes.css';
import styled from 'styled-components';
import '../pictures/cute-fox-vector.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const QuizPageContainer = styled.div`
    background: linear-gradient(#21d2fb, #092645);
    max-width: 1224px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 70px;
    color: #eee;
`;

const Avatar = styled.img`
    width: 130px;
    height: 130px;
    border-radius: 50%;
    object-fit: cover;
    /* object-position: 100% 0; */
    margin-top: 40px;
    filter: drop-shadow(0 0 0.75rem #1c253c);
`;


const UserHeading = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;

`;

const Username = styled.h3`
    font-family: 'Poiret One', cursive;
    color: #252628;
    text-transform: capitalize;
    font-size: 3rem;
    margin-top: 0;
    margin-left: 20px;
    
`;


const QuizBody = styled.div`
    border-radius: 2px;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    background:  #252628;
    height: 540px;
`;

const QuizContent = styled.div`
    width: 90%;
    margin: 30px auto 30px auto;
    display: flex;

    span {
        margin-left: 5px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        letter-spacing: .1rem;
    }
`;

const QuizTitle = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    padding-top: 40px;
    font-size: 4rem;

`;


const Marker = styled(FontAwesomeIcon)`
    color: #1fcff8;
    font-size: 1.6rem;
`;

const TriangleDiv = styled.div`
    width: 200px;
    background: #21d2fb;
    clip-path: polygon(46% 100%, 0 0, 100% 0);
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 10px;
    padding-right: 40px;
    display: flex;
    justify-content: center;
    margin-right: 0;
    border-radius: 2px;

    div {
        font-size: 2.5rem;
        margin-left: 60px;
        margin-right: 40px;
        text-align: center;
        padding-bottom: 60px; 
    }
`;

const LeftWrapper = styled.div`
    padding-top: 20px;
    padding-right: 30px;
`;


const Globe = styled(FontAwesomeIcon)`
    font-size: 3.5rem;
`;

const PentagonWrapper = styled.div`
    position: relative;

`;

const Pentagon = styled.img`
    width: 550px;
    height: 500px;
    clip-path: polygon(35% 0, 100% 0, 100% 100%, 0 100%, 0 70%);
    position: absolute;
    top: -205px;
    left: 35px;
    object-fit: cover;
    padding-right: 20px;
    border-radius: 2px;
`;

const Description = styled.p`
    width: 260px;

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
          console.log('reponse quizpage', response.data); 
          this.setState({quiz: response.data, author: response.data.author}) 
        })
        .catch(err => console.log(err));
    }


    render(){
        console.log('test 2', this.state.quiz);
        return (
            <div className="quizPage-background">
                <QuizPageContainer >
                    <UserHeading>
            
                        <Username >{this.state.author.username}</Username>
                        {this.state.author.img_url ? (
                            <Avatar src={this.state.author.img_url} />
                        ) : (
                            <Avatar src="http://www.spiritanimal.info/wp-content/uploads/Owl-Spirit-Animal-4.jpg" alt="Fox avatar"/>
                        )}
                    </UserHeading>
                    <QuizBody>
                        <QuizContent>
                            <div>
                                <QuizTitle className="quiz-title">{this.state.quiz.title}</QuizTitle>
                                <p><Marker icon="marker"/><span>{this.state.quiz.topic}</span></p>
                                <Description>VueJS is implemented as some kind of deployment-ready files. Ramda is a predictable state container for asynchronous HTTP requests. Transmitting information about the subject, maintains a standard defining how to extend JavaScript. BEM is a given context in C. DOM in C.</Description>
                            </div>
                            <LeftWrapper>
                                <TriangleDiv>
                                    <div>
                                        <Globe icon="globe-americas"/>
                                        <p>4810</p>
                                    </div>
                                </TriangleDiv>
                                <PentagonWrapper>
                                    <Pentagon src="https://images.unsplash.com/photo-1467131825866-8e0a12d12448?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1061&q=80" />
                                </PentagonWrapper>
                            </LeftWrapper>
                        </QuizContent>
                    </QuizBody>
                </QuizPageContainer>
            </div>
        );
    }
}

export default QuizPage;