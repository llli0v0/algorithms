/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} prices
 * @return {number}
 */
var sellingWood = function(m, n, prices) {
  let map = {};
  for (let i = 0; i < prices.length; i++) {
    let [a, b, c] = prices[i];
    map[`${a} ${b}`] = c;
  }
  let dp = {};
  return helper(m, n);
  
  function helper(m, n) {
    let key = `${m} ${n}`;
    if (dp[key] !== undefined) return dp[key];
    dp[key] = map[key] ? map[key] : 0;
    for (let i = 1; i < m; i++) {
      dp[key] = Math.max(dp[key], helper(i, n) + helper(m - i, n));
    }
    for (let i = 1; i < n; i++) {
      dp[key] = Math.max(dp[key], helper(m, i) + helper(m, n - i));
    }
    return dp[key];
  }
};
