import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InputsWrapper = styled.div`
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InputsContainer = styled.div`
    margin-top: 35px;
    background: #fff;
    width: 450px;
    height: 650px;
    filter: drop-shadow(0 7mm 4mm rgba(0, 0, 0, .4));
    border-radius: 3px;
`;

const Heading = styled.h4`
     font-family: 'Open Sans', sans-serif;
     text-align: center;
     font-size: 1.6rem;
     margin-top: 180px;
     font-weight: bold;
     color: #495057;
`;

const HeaderRelative = styled.div`
    position: relative;
`;

const PurpleHeader = styled.div`
    width: 90%;
    margin: 0 auto;
    background: linear-gradient(45deg, #a93fbd, #8017a6);
    text-align: center;
    position: absolute;
    top: -50px;
    left: 22px;
    filter: drop-shadow(0 5mm 4mm rgba(0, 0, 0, .3));
    border-radius: 3px;
`;

const IconsContainer = styled.div`
    padding-top: 30px;
    padding-bottom: 35px;

    p{
        color: white;
        font-family: 'Open Sans', sans-serif;
        font-size: 2.2rem;
    }

    div {
        margin-top: 25px;
        font-size: 2.8rem;
        color: white;
        display: flex;
        width: 50%;
        margin-right: auto;
        margin-left: auto;
        justify-content: space-around;
    }
`;

const AwesomeIcon = styled(FontAwesomeIcon)`
    font-size: 3.3rem;
    color: #495057;
    margin-right: 15px;
    
`;

const BottomWrapper = styled.div`
    width: 90%;
    margin: 15px auto 15px auto;
`;

const Input = styled.input`
    border: none;
    border-bottom: 2px solid #ddd;
    width: 85%;
    padding-top: 7px;
    padding-bottom: 7px;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.7rem;
    color: #8c8c8c;

    &::placeholder {
        color: #a6a6a6;
    }
    

    &:active {
        outline: none;
    }

    &:focus {
        outline: none;
        border-bottom: 3px solid  #a93fbd;
        border-radius: 2px;
    }
`;

const InputFieldContent = styled.div`
    margin-top: 15px;
    margin-bottom: 48px;
`;

const LinkWrpapper = styled.div`
    width: 300px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-around;

    span {
        font-size: 1.8rem;
        color: #a93fbd;
        font-family: 'Open Sans', sans-serif;
        font-weight: bold; 
    }
`;

const StyledLink = styled(Link)`
    font-size: 1.8rem;
    color: #a93fbd;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;

    &:hover {
        color: #8017a6;
        text-decoration: none;
    }

`;


////Component////


class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizzes: '',
      username: '',
      email: '',
      password: '',
      img_url: '',
    };
  }

  componentDidMount() {
    axios.get(`https://lambda-study-app.herokuapp.com/api/quizzes/`)
    .then(response => {
      console.log('response in sign up', response.data); 
      this.setState({quizzes: response.data}) 
    })
    .catch(err => console.log(err));
  }


  addNewUser = event => {
    event.preventDefault();
    const userList  = this.state.quizzes.map(quiz => {
        return quiz.author;
    });
    const user = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        img_url: this.state.img_url
    }
    if(!userList.includes(this.state.username)){
        this.props.addUser(user);
        //console.log(user);
    }
  }


  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="signup-background">
        <form onSubmit={this.addNewUser}>
            <InputsWrapper>
                <InputsContainer>
                    <HeaderRelative>
                        <PurpleHeader>
                            <IconsContainer>
                                <p>Sign Up</p>
                                <div>
                                    <span><FontAwesomeIcon icon={['fab', 'facebook']}/></span>
                                    <span><FontAwesomeIcon icon={['fab', 'twitter']}/></span>
                                    <span><FontAwesomeIcon icon={['fab', 'google-plus-g']}/></span>
                                </div>
                            </IconsContainer>
                        </PurpleHeader>
                     </HeaderRelative>
                    <Heading>Or Be Classical</Heading>
                        <BottomWrapper>

                            <InputFieldContent>
                                <AwesomeIcon icon="grin-beam"/>
                                <Input 
                                required
                                type="text" 
                                placeholder="Username..."
                                onChange={this.handleInputChange}
                                value={this.state.username}
                                name="username"
                                />
                            </InputFieldContent>

                            <InputFieldContent>
                                <AwesomeIcon icon="envelope"/>
                                <Input 
                                required
                                type="email" 
                                placeholder="Email..."
                                onChange={this.handleInputChange}
                                value={this.state.email}
                                name="email"
                                />
                                
                            </InputFieldContent>

                            <InputFieldContent>
                                <AwesomeIcon icon="unlock-alt"/>
                                <Input 
                                required
                                type="password" 
                                placeholder="Password..."
                                onChange={this.handleInputChange}
                                value={this.state.password}
                                name="password"
                                />
                            </InputFieldContent>

                            <InputFieldContent>
                                <AwesomeIcon icon="images"/>
                                <Input 
                                type="text" 
                                placeholder="Image URL..."
                                onChange={this.handleInputChange}
                                value={this.state.img_url}
                                name="img_url"
                                />
                            </InputFieldContent>

                        </BottomWrapper>
                        <LinkWrpapper>
                            <button type="submit" className="submit-btn">GET STARTED</button>
                            <span>OR</span>
                            <StyledLink to="/api/auth/login">LOG IN</StyledLink>
                        </LinkWrpapper>
                        
                </InputsContainer>
            </InputsWrapper>
        </form>
      </div>
    );
  }
}

export default SignUpForm;