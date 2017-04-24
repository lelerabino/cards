import React, {Component} from 'react';
import HiddenCard from './HiddenCard';

export default class DeckBox extends Component {
  delay(fn, delay){
    setTimeout(fn, delay);
  };

  render() {
    let moveCard = this.props.moveCard, delay = this.delay;
    return (
      <div className="Deck-box">
        <ul className="deck">
          {
            this.props.cards.map(function (card, index) {
              return (
                <li key={card.cardId}>
                  <HiddenCard card={card} moveCard={moveCard} delay={delay}/>
                </li>)
            })
          }
        </ul>
      </div>
    );
  }
};
