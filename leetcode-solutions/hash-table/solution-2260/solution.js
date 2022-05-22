/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
  let map = {};
  let result = Infinity;
  for (let i = 0; i < cards.length; i++) {
    let c = cards[i];
    if (map[c] !== undefined) {
      result = Math.min(result, i - map[c] + 1);
    }
    map[c] = i;
  }
  return result > 10 ** 5 ? -1 : result;
};
