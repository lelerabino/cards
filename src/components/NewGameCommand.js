import React, {Component} from 'react';
import { reset as resetPersistence } from '../localStore';

export default class NewGameCommand extends Component {
  newGame() {
    resetPersistence();
    document.location.reload();
  };

  render() {
    return (
      <button onClick={this.newGame.bind(this)} className="command">New Game</button>
    );
  };
};