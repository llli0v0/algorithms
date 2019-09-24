/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length < 2) return 0;

  let M = prices[0];
  let result = 0;

  for (let i = 1; i < prices.length; i++) {
    result = Math.max(result, prices[i] - M);
    M = Math.min(M, prices[i]);
  }

  return result;
};