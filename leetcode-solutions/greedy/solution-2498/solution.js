/**
 * @param {number[]} stones
 * @return {number}
 */
var maxJump = function(stones) {
  let res = 0;
  for (let i = 0; i < stones.length; i++) {
    let s = stones[i];
    res = Math.max(res, s - (stones[i - 1] ?? s), s - (stones[i - 2] ?? s));
  }
  return res;
};
