import React from "react";
import { Jumbotron, Button } from 'react-bootstrap';
import styled from 'styled-components';
import '../App.css';

const Header = styled.div`
    display: flex;
    justify-content: center;
    height: 80vh;
`;

const JumbotronStyled = styled(Jumbotron)`
    margin: 0 auto;
    background: none;
    max-width: 900px;
    margin-right: 60px;
    align-self: center;
`;

const Heading = styled.h2`
    font-size: 7.5rem;
    margin-bottom: 25px;
    font-family: 'Montserrat', sans-serif;
`;

const SubHeading = styled.h4`
    font-weight: 300;
    font-size: 5rem;
`;

const ButtonPrimary = styled(Button)`
    font-size: 2rem;
    margin-top: 20px;
    padding-left: 40px;
    padding-right: 40px;
`;
/* Component */

const JumbotronComponent = props => {
  return (
    <div className="jumbotron-background">
        <Header>
                <JumbotronStyled>
                    <Heading>You are out of this world!</Heading>
                    <SubHeading>
                        Test your knowledge! Take our quiz.
                    </SubHeading>
                    <p>
                        <ButtonPrimary bsStyle="primary">Start</ButtonPrimary>
                    </p>
            </JumbotronStyled>
        </Header>
    </div>
  );
};

export default JumbotronComponent;