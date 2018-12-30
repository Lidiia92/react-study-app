import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//same
const InputsWrapper = styled.div`
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

//changed height, width
const InputsContainer = styled.div`
    margin-top: 35px;
    background: #fff;
    width: 650px;
    height: 380px;
    filter: drop-shadow(0 7mm 4mm rgba(0, 0, 0, .4));
    border-radius: 3px;
`;

//same
const HeaderRelative = styled.div`
    position: relative;
`;

//changed left value
const PurpleHeader = styled.div`
    width: 90%;
    margin: 0 auto;
    background-image: linear-gradient(to left bottom, #21d2fb, #1ba2cf, #1a75a1, #154c73, #092645);
    text-align: center;
    position: absolute;
    top: -50px;
    left: 33px;
    filter: drop-shadow(0 5mm 4mm rgba(0, 0, 0, .3));
    border-radius: 3px;
`;

//changed font-size
const IconsContainer = styled.div`
    padding-top: 18px;
    padding-bottom: 20px;

    p{
        color: white;
        font-family: 'Open Sans', sans-serif;
        font-size: 3rem;
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

//same
const AwesomeIcon = styled(FontAwesomeIcon)`
    font-size: 3.3rem;
    color: #495057;
    margin-right: 15px;
    
`;

//same
const BottomWrapper = styled.div`
    width: 90%;
    margin: 100px auto 15px auto;
`;

//changed width
const Input = styled.input`
    border: none;
    border-bottom: 2px solid #ddd;
    width: 90%;
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

//same
const InputFieldContent = styled.div`
    margin-top: 15px;
    margin-bottom: 48px;
`;

//same
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

//same
const StyledButton = styled.button`
    font-size: 1.8rem;
    color: #1ba2cf;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    background: none;
    border: none;

    &:hover {
        color: #8017a6;
        text-decoration: none;
    }

`;



////Component////


class EditQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: props.title,
        topic: props.topic
        
    };
  }


//   componentWillReceiveProps(){
//       this.setState({
//             title: this.props.quiz.title,
//             topic: this.props.quiz.topic
//       })
//   }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log('state in editquiz', this.props.quiz);
    return (
      <div id="edit-page" className="signup-background">
        <form onSubmit={() => this.props.editQuiz(this.state, this.props.id, this.props.token)}>
            <InputsWrapper>
                <InputsContainer>
                    <HeaderRelative>
                        <PurpleHeader>
                            <IconsContainer>
                                <p>Edit Your Quiz</p>
                            </IconsContainer>
                        </PurpleHeader>
                     </HeaderRelative>
                        <BottomWrapper>
                            <InputFieldContent>
                                <AwesomeIcon icon="code"/>
                                <Input 
                                required
                                type="text" 
                                placeholder="Title..."
                                onChange={this.handleInputChange}
                                value={this.state.title || ''}
                                name="title"
                                />
                            </InputFieldContent>
                            <InputFieldContent>
                                <AwesomeIcon icon="comment-alt"/>
                                <Input 
                                required
                                type="text" 
                                placeholder="Topic..."
                                onChange={this.handleInputChange}
                                value={this.state.topic || ''}
                                name="topic"
                                />
                            </InputFieldContent>
                        </BottomWrapper>
                        <LinkWrpapper>
                            <StyledButton type="submit">EDIT</StyledButton>
                        </LinkWrpapper>       
                </InputsContainer>
            </InputsWrapper>
        </form>
      </div>
    );
  }
}

export default EditQuiz;