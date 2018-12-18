import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron';
import NavBar from './components/NavBar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Jumbotron />
      </div>
    );
  }
}

export default App;
