import React from 'react';
import {mount} from 'enzyme';
import PlayerBox from '../components/PlayerBox';

describe('PlayerBox Component', () => {

  it('PlayerBox should render cards as VisibleCard components with the right props', () => {

    const wrapPlayerBox = mount(
      <PlayerBox playerId={0} giveCard={function(){}} cards={[{cardId:0, tpl:'A', owner:0},{cardId:1, tpl:'B', owner:0}]}/>
    );

    expect(wrapPlayerBox.find('VisibleCard').length).toEqual(2);
    expect(wrapPlayerBox.find('VisibleCard').at(0).props().card).toEqual({cardId:0, tpl:'A', owner:0});
  });
});


