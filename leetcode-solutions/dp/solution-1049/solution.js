/**
 * @param {number[]} stones
 * @return {number}
 */
/**
 * 把stone标记为+ - 这是个经典背包问题 
 */
var lastStoneWeightII = function(stones) {
  let a = stones.reduce((a, b) => a + b);
  let dp = new Array(Math.ceil(a / 2) + 1).fill(null).map(() => [0, new Set()]);
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < stones.length; j++) {
      let k = i - stones[j];
      if (dp[k] && !dp[k][1].has(j) && dp[k][0] + stones[j] > dp[i][0]) {
        dp[i][0] = dp[k][0] + stones[j];
        dp[i][1] = new Set(dp[k][1]);
        dp[i][1].add(j);
      }
    }
  }
  let b = 0;
  for (let i = 0; i < dp.length; i++) b = Math.max(b, dp[i][0]);
  return Math.abs(a - 2 * b);
};