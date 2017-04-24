import React from 'react';
import {shallow} from 'enzyme';
import HiddenCard from '../components/HiddenCard';

describe('HiddenCard Component', () => {

  it('HiddenCard moveCard called with the embedded cardId on dragStart event', () => {
    const mockSemaphore = { calledWith:'x'};
    const moveCard = function(cardId){
      mockSemaphore.calledWith = cardId;
    };
    const delay = (fn, delay) => {fn();};

    const cmpHiddenCard = shallow(
      <HiddenCard card={{cardId:2, tpl: '2-spades-♠'}} moveCard={moveCard} delay={delay}/>
    );

    expect(mockSemaphore.calledWith).toEqual('x');
    cmpHiddenCard.simulate('dragStart');
    expect(mockSemaphore.calledWith).toEqual(2);
  });

  it('HiddenCard moveCard called with the embedded cardId on dragEnd event', () => {
    const mockSemaphore = { calledWith:'x'};
    const moveCard = function(cardId){
      mockSemaphore.calledWith = cardId;
    };

    const cmpHiddenCard = shallow(
      <HiddenCard card={{cardId:2, tpl: '2-spades-♠'}} moveCard={moveCard}/>
    );

    expect(mockSemaphore.calledWith).toEqual('x');
    cmpHiddenCard.simulate('dragEnd');
    expect(mockSemaphore.calledWith).toEqual(2);
  });

});


