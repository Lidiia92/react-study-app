import React from "react";
import { Navbar, NavItem, Nav, NavDropdown, MenuItem  } from 'react-bootstrap';
import styled from 'styled-components';
import '../App.css';


const Brand = styled.a.attrs({
    className: 'navbar-inverse navbar-brand'
  })`
    &&& {
      color: #b0b0b0;
      font-size: 3rem;
      font-family: 'Fredericka the Great', cursive;

      &:hover {
          color: #fff;
      }
    }
  `;


/* Component */

const NavigationBar = props => {
    return (
        <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Brand href="/">SmartCookie</Brand>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav >
            <NavItem eventKey={1} href="/api/quizzes">Quizzes</NavItem>  
            <NavItem eventKey={2} href="#">
              Link
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Link Right
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link Right
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };
  
  export default NavigationBar;