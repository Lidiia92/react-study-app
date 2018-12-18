import React from "react";
import { Jumbotron, Button } from 'react-bootstrap';
import styled from 'styled-components';

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
    font-family: 'Fredericka the Great', cursive;
`;

const SubHeading = styled.h4`
    font-weight: 300;
    font-size: 5rem;
`;

const ButtonPrimary = styled(Button)`
    font-size: 2.5rem;
    marging-top: 20px;
    padding-left: 40px;
    padding-right: 40px;
    font-weight: bold;
`;
/* Component */

const JumbotronComponent = props => {
  return (
    <Header>
            <JumbotronStyled>
                <Heading>You are one smart Cookie!</Heading>
                <SubHeading>
                    Test your knowledge! Take our quiz.
                </SubHeading>
                <p>
                    <ButtonPrimary bsStyle="primary">Start</ButtonPrimary>
                </p>
        </JumbotronStyled>
    </Header>
  );
};

export default JumbotronComponent;