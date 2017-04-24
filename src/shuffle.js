export default function shuffle(cards) {
  return cards.sort((a, b) => Math.random() >= 0.5 ? -1:1);
};
