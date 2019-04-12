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
        <Tabs>
          <div label="JL" hierarchy="primary">
            <Banner></Banner>
          </div>
          <div label="Projects" hierarchy="secondary">
            Projects
          </div>
          <div label="Creative" hierarchy="secondary">
            Creative
          </div>
          <div label="Case Studies" hierarchy="secondary">
            Case Studies
          </div>
          <div label="Resume" hierarchy="secondary">
            Resume
          </div>
        </Tabs>
      </div>
    );
  }
}

export default App;
