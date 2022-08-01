/**
 * @param {number[]} rolls
 * @param {number} k
 * @return {number}
 */
var shortestSequence = function(rolls, k) {
  let res = 1;
  let set = new Set();
  for (let i = 0; i < rolls.length; i++) {
    if (rolls[i] >= 1 && rolls[i] <= k) {
      set.add(rolls[i]);
      if (set.size === k) {
        set = new Set();
        res++;
      }
    }
  }
  return res;
};
