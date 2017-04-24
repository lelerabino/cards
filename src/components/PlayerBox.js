import React, {Component} from 'react';
import VisibleCard from './VisibleCard';
import {Droppable} from 'react-drag-and-drop';

export default class PlayerBox extends Component {
  onDrop(data) {
    this.props.giveCard(parseInt(data.card, 10), this.props.playerId);
  };

  render() {
    return (
      <Droppable types={['card']} onDrop={this.onDrop.bind(this)} className="Player-box" style={this.props.style}>
        <span className="playerName">{this.props.playerName}</span>
        <ul className="hand">
          {
            this.props.cards.map((card, index) => (
              <li  key={card.cardId}>
                <VisibleCard giveCard={this.props.giveCard} card={card}/>
              </li>))
          }
        </ul>
      </Droppable>
    );
  }
};
