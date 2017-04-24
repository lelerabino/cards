import React from 'react';
import {shallow} from 'enzyme';
import VisibleCard from '../components/VisibleCard';

describe('VisibleCard Component', () => {

  it('VisibleCard giveCard called with the embedded cardId on click event', () => {
    const mockSemaphore = {calledWith: {cardId: '-', target: '-'}};
    const giveCard = function (cardId, target) {
      mockSemaphore.calledWith = {
        cardId,
        target
      };
    };

    const cmpVisibleCard = shallow(
      <VisibleCard card={{cardId: 2, tpl: '2-spades-♠'}} giveCard={giveCard}/>
    );

    expect(mockSemaphore.calledWith).toEqual({cardId: '-', target: '-'});
    cmpVisibleCard.find('a').simulate('click');
    expect(mockSemaphore.calledWith).toEqual({cardId: 2, target: null});
  });
});


