import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Banner from './Banner';
import Button from './Button';

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
