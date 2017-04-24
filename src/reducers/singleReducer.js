import {GIVE_CARD, MOVE_CARD} from '../actions';

function singleReducer(state, action) {
  switch (action.type) {
    case GIVE_CARD:
      let usedCard = action.card;
      if (null === usedCard) {
        usedCard = state.cards.findIndex(card => !(card.owner >= 0))
      }
      return Object.assign({}, state, {
        cards: state.cards.map((card, index) => {
          if (index === usedCard) {
            if (action.target === null) {
              let newCard = Object.assign({}, card);
              delete newCard.owner;
              return newCard;
            }
            let newCard = Object.assign({}, card, {
              owner: action.target
            });
            delete newCard.moving;
            return newCard;
          }
          return card;
        })
      });
    case MOVE_CARD:
      return Object.assign({}, state, {
        cards: state.cards.map((card, index) => {
          if (index === action.card) {
            if (card.moving) {
              let newCard = Object.assign({}, card);
              delete newCard.moving;
              return newCard;
            }
            else {
              return Object.assign({}, card, {
                moving: true
              });
            }
          }
          return card;
        })
      });
    default:
      return state;
  }
}

export default singleReducer;