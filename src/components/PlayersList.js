import React, {Component} from 'react';
import PlayerBox from './PlayerBox';

export default class PlayersList extends Component {
  render() {
    const players = [];
    for (let i = 0; i < this.props.numberOfPlayers; i++) {
      players.push(
        <PlayerBox key={i} playerId={i} giveCard={this.props.giveCard} playerName={'player' + i} style={{top: (30 + 15 * i) + '%'}}
                   cards={this.props.cards.filter(card => {
                     return card.owner === i
                   })}/>
      );
    }
    return (
      <div className="playersContainer">
        {players}
      </div>
    )
  }
};
