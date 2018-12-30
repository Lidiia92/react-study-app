import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import './css/Quizzes.css';
import styled from 'styled-components';
import '../pictures/cute-fox-vector.jpg';
import TopicsStyled from './Quizzes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import EditQuiz from './EditQuiz';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const QuizPageContainer = styled.div`
    background: linear-gradient(#21d2fb, #092645);
    max-width: 1224px;
    margin-left: auto;
    margin-right: auto;
    color: #eee;
    padding-bottom: 50px;
    margin-bottom: 50px;
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
    filter: drop-shadow(0 5mm 4mm rgba(0, 0, 0, .3));
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
    font-size: 2.5rem;
    width: 200px;
    color: rgba(204,204,204,1);

`;


const Marker = styled(FontAwesomeIcon)`
    font-size: 1.6rem;
    margin-top: 10px;
    color: rgba(204,204,204,1);
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

        p{
            font-size: 1.8rem;
        }
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
    display: inline-block;
    max-width: 550px;
    height: 500px;
    clip-path: polygon(35% 0, 100% 0, 100% 100%, 0 100%, 0 70%);
    position: absolute;
    top: -194px;
    left: 35px;
    object-fit: cover;
    padding-right: 20px;
    border-radius: 2px;
`;

const Description = styled.p`
    width: 260px;
    color: rgba(204,204,204,1);

`;

const AwesomeIcon = styled(FontAwesomeIcon)`
    margin-left: 20px;
    font-weight: 100;
`;

const Votes = styled.span`
    display: block;
    margin-top: 42px;
    margin-left: 220px;
    color: rgba(204,204,204,1);
    text-align: right;
    font-size: 2rem;
`;
const Heart = styled(FontAwesomeIcon)`
  color: rgba(204,204,204,1);
  margin-left: 10px;

`;

const Buttons = styled(AnchorLink)`
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


////Component///

class QuizPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            quiz: '', 
            author: '',
            token: props.token
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
                                <Buttons href="#edit-page" className="topics-small">Edit <AwesomeIcon icon="edit"/></Buttons>
                                <Link to="/" className="topics-small" onClick={() => this.props.deleteQuiz(this.state.quiz.id, this.state.token)}>Delete <AwesomeIcon icon="trash-alt"/></Link>
                                 
                                <Votes>{this.state.quiz.votes}<Heart icon="heart"/></Votes>
                            </div>
                            <LeftWrapper>
                                <TriangleDiv>
                                    <div>
                                        <Globe icon="star"/>
                                        <p>Favorite</p>
                                    </div>
                                </TriangleDiv>
                                <PentagonWrapper>
                                    <Pentagon src="https://images.unsplash.com/photo-1467131825866-8e0a12d12448?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1061&q=80" />
                                </PentagonWrapper>
                            </LeftWrapper>
                        </QuizContent>
                    </QuizBody>
                </QuizPageContainer>
                {this.state.quiz !== '' && <EditQuiz id={this.state.quiz.id} title={this.state.quiz.title} topic={this.state.quiz.topic} token={this.state.token} editQuiz={this.props.editQuiz} quiz={this.state.quiz}/>}
            </div>
        );
    }
}

export default QuizPage;