import deepFreeze from 'deep-freeze';
import reducer from '../reducers/singleReducer';
import {giveCard, moveCard} from '../actions';
import cards from '../cards';

describe('reducer', () => {
  it('should provide the initial state', () => {
    expect(reducer({ cards:cards, numberOfPlayers: 4}, {}).cards).toEqual(expect.arrayContaining([{tpl: '6-spades-♠'}]));
  });

  it('should handle GIVE_CARD action from deck to player', () => {
    const stateBefore = {
      cards: [
        {tpl: 'A'},
        {tpl: 'B'},
        {tpl: 'C'}
      ],
      numberOfPlayers: 4
    };
    const action = giveCard(1,2);
    const stateAfter = {
      cards: [
        {tpl: 'A'},
        {tpl: 'B', owner:2},
        {tpl: 'C'}
      ],
      numberOfPlayers: 4
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(reducer(stateBefore, action)).toEqual(stateAfter);
  });

  it('should handle GIVE_CARD action from player to deck', () => {
    const stateBefore = {
      cards: [
        {tpl: 'A'},
        {tpl: 'B', owner:2},
        {tpl: 'C'}
      ],
      numberOfPlayers: 4
    };
    const stateAfter = {
      cards: [
        {tpl: 'A'},
        {tpl: 'B'},
        {tpl: 'C'}
      ],
      numberOfPlayers: 4
    };
    const action = giveCard(1, null);


    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(reducer(stateBefore, action)).toEqual(stateAfter);
  });

  it('should handle MOVE_CARD action for a card in the deck', () => {
    const stateBefore = {
      cards: [
        {tpl: 'A'},
        {tpl: 'B'},
        {tpl: 'C'}
      ],
      numberOfPlayers: 4
    };
    const action = moveCard(1);
    const stateAfter = {
      cards: [
        {tpl: 'A'},
        {tpl: 'B', moving:true},
        {tpl: 'C'}
      ],
      numberOfPlayers: 4
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(reducer(stateBefore, action)).toEqual(stateAfter);
  });

  it('should handle MOVE_CARD action for an already moving card', () => {
    const stateBefore = {
      cards: [
        {tpl: 'A'},
        {tpl: 'B', moving:true},
        {tpl: 'C'}
      ],
      numberOfPlayers: 4
    };
    const action = moveCard(1);
    const stateAfter = {
      cards: [
        {tpl: 'A'},
        {tpl: 'B'},
        {tpl: 'C'}
      ],
      numberOfPlayers: 4
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(reducer(stateBefore, action)).toEqual(stateAfter);
  });
});
