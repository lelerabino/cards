import React, {Component} from 'react';

export default class VisibleCard extends Component {
  render() {
    let tplTokens = this.props.card.tpl.split('-');
    let rank=tplTokens[0], suit=tplTokens[1], symbol=tplTokens[2];
    return (
      <a onClick={this.props.giveCard.bind(this, this.props.card.cardId, null)} className={`card rank-${rank} ${suit}`} href="#">
        <span className="rank">{rank}</span>
        <span className="suit">{symbol}</span>
      </a>
    );
  }
};