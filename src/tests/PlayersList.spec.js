import React from 'react';
import {mount} from 'enzyme';
import PlayersList from '../components/PlayersList';

describe('PlayersList Component', () => {

  it('PlayersList should render numberOfPlayers instance of PlayerBox sub components', () => {

    const wrapPlayersList = mount(
      <PlayersList numberOfPlayers={2} cards={[]}/>
    );
    //console.log(wrapPlayersList.find('PlayerBox').debug());
    expect(wrapPlayersList.props().numberOfPlayers).toEqual(2);
    expect(wrapPlayersList.find('PlayerBox').length).toEqual(2);
  });

  it('PlayersList should assign specific properties to each PayerBox sub component', () => {

    const wrapPlayersList = mount(
      <PlayersList numberOfPlayers={2} cards={[]}/>
    );

    expect(wrapPlayersList.find('PlayerBox').at(0).props().playerId).toEqual(0);

    expect(wrapPlayersList.find('PlayerBox').at(0).props().playerName).toEqual('player0');
  });

  it('PlayersList should assign only the "owned" cards to a player', () => {

    const wrapPlayersList = mount(
      <PlayersList numberOfPlayers={2} giveCard={function(){}} cards={[{cardId:0, tpl:'A', owner:0},{cardId:1, tpl:'B', owner:1},{cardId:2, tpl:'C'}]}/>
    );

    expect(wrapPlayersList.find('PlayerBox').at(0).props().cards).toEqual([{cardId:0, tpl:'A', owner:0}]);
  });
});


