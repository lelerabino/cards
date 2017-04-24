export const GIVE_CARD = 'GIVE_CARD';
export const MOVE_CARD = 'MOVE_CARD';

export const giveCard = (card, target) => ({
  type: GIVE_CARD,
  card,
  target
});

export const moveCard = (card) => ({
  type: MOVE_CARD,
  card,
});