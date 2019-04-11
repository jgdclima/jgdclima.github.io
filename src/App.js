import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Banner from './Banner';
import Button from './Button';
import Tabs from './Tabs'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Tabs>
          <div label="JL">
            Home
            <Banner></Banner>
          </div>
          <div label="Projects">
            Projects
          </div>
          <div label="Creative">
            Creative
          </div>
          <div label="Case Studies">
            Case Studies
          </div>
          <div label="Resume">
            Resume
          </div>
        </Tabs>
      </div>
    );
  }
}

export default App;
