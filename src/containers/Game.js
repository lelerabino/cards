import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import { giveCard, moveCard } from '../actions';
import DeckBox from '../components/DeckBox';
import PlayersList from '../components/PlayersList';
import SaveCommand from '../components/SaveCommand';
import NewGame from '../components/NewGameCommand';

export class Game extends Component {
  getIdentifiableCards() {
    return this.props.cards.map((card, index) => {
      return Object.assign({}, card, {
        cardId: index
      });
    });
  };

  render() {
    let identifiableCards = this.getIdentifiableCards();
    return (
      <div className="game playingCards faceImages rotateHand">
        <PlayersList giveCard={this.props.giveCard} numberOfPlayers={this.props.numberOfPlayers} cards={identifiableCards.filter(card => {
          return card.owner >= 0;
        })}/>
        <DeckBox deckName="Deck" moveCard={this.props.moveCard} giveCard={this.props.giveCard} cards={identifiableCards.filter(card => {
          return !card.hasOwnProperty('owner');
        })}/>
        <SaveCommand/>
        <NewGame/>

      </div>
    )
  }
};

function mapStateToProps(state, ownProps) {
  return state;
}

const mapDispatchToProps = dispatch => ({
  giveCard: (card, target) => dispatch(giveCard(card, target)),
  moveCard: (card) =>  dispatch(moveCard(card))
});

const ConnectedGame = connect(mapStateToProps, mapDispatchToProps)(Game);

export default ConnectedGame;
