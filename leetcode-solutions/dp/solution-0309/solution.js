/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let dp = [];

  dp[-2] = 0;
  dp[-1] = 0;
  dp[0] = 0;

  for (let i = 1; i < prices.length; i++) {
    dp[i] = dp[i - 1];

    for (let j = 0; j < i; j++) {
      dp[i] = Math.max(dp[i], prices[i] - prices[j] + dp[j - 2]);
    }
  }

  return dp[dp.length - 1];
};