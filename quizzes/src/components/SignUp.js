import React, { Component } from 'react';
import axios from 'axios';
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
`;

const Heading = styled.h4`
     font-family: 'Open Sans', sans-serif;
     text-align: center;
     font-size: 1.6rem;
     margin-top: 180px;
     font-weight: bold;
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
    filter: drop-shadow(0 2mm 4mm rgba(0, 0, 0, .5));
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


class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api

    axios.post('http://localhost:3333/smurfs', this.state)
    .then(response => {this.props.updateSmurfList(response.data); console.log(response.data);})
    .catch(err => console.log(err));

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="signup-background">
        <form>
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
                    <input type="text"/>
                    <input type="email"/>
                    <input type="password"/>
                    <input type="text"/>
                </InputsContainer>
            </InputsWrapper>
        </form>
      </div>
    );
  }
}

export default SignUpForm;