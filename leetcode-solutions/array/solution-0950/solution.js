/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
  deck = deck.sort((a, b) => a - b);
  let result = [deck[deck.length - 1]];
  for (let i = deck.length - 2; i >= 0; i--) {
    result.unshift(result.pop());
    result.unshift(deck[i]);
  }
  return result;
};

deckRevealedIncreasing([17,13,11,2,3,5,7]);