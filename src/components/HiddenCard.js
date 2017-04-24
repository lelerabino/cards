import React, {Component} from 'react';
import {Draggable} from 'react-drag-and-drop';

export default class HiddenCard extends Component {
  onDragStart(e) {
    const props = this.props;
    const fn = () => {
      (props.moveCard(props.card.cardId))
    };

    //injected delay (wich is the standard setTimeout call in the implementation) to make the component easy to test
    props.delay(fn, 0);
  }

  onDragEnd(e) {
    const props = this.props;
    props.moveCard(props.card.cardId);
  }

  render() {
    let card = this.props.card;
    return (
      <Draggable className={'card back ' + (card.moving ? 'dragging' : '')} type="card" data={card.cardId} onDragStart={this.onDragStart.bind(this)}
                 onDragEnd={this.onDragEnd.bind(this)}>
        {this.props.tpl}
      </Draggable>
    );
  }
};
