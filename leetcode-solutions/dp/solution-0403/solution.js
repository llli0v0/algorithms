/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
  let dp = new Array(stones.length).fill(null).map(() => new Set());
  dp[0].add(1);
  for (let i = 1; i < stones.length; i++) {
    for (let j = 0; j < i; j++) {
      let a = stones[i] - stones[j];
      if (dp[j].has(a)) {
        dp[i].add(a);
        dp[i].add(a - 1);
        dp[i].add(a + 1);
      }
    }
  }
  return dp[dp.length - 1].size > 0;
};