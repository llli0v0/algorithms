/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function(candidates) {
  let map = {};
  for (let i = 0; i < candidates.length; i++) {
    for (let j = 0; j <= 30; j++) {
      if (map[j] === undefined) map[j] = 0;
      if ((candidates[i] & (1 << j)) === (1 << j)) map[j]++;
    }
  }
  let result = 0;
  for (let k in map) result = Math.max(result, map[k]);
  return result;
};