/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let dp = [0];
  let m1 = prices[0];
  let result = 0;

  for (let i = 1; i < prices.length; i++) {
    dp.push(Math.max(dp[i - 1] === undefined ? 0 : dp[i - 1], prices[i] - m1));
    
    m1 = Math.min(m1, prices[i]);

    let m2 = prices[i - 1];

    for (let j = i - 1; j >= 0; j--) {
      m2 = Math.min(m2, prices[j]);

      let a = Math.max(0, prices[i] - m2);

      result = Math.max(result, a + (dp[j - 1] === undefined ? 0 : dp[j - 1]));
    }
  }

  return result;
};