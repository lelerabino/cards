import React, { Component } from 'react';
import './App.css';
import './cards.css';
import Game from '../containers/Game';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header text="Cards game"/>
        <Game/>
      </div>
    );
  }
}

export default App;
