import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Header.js';
import './Banner.js';
import './Button.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Banner></Banner>
      </div>
    );
  }
}

export default App;
