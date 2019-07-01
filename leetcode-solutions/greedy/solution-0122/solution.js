/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (!prices.length) return 0;
  let currentMin = prices[0], result = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i - 1]) {
      result = result + prices[i - 1] - currentMin;
      currentMin = prices[i];
    }
    if (prices[i] < currentMin) currentMin = prices[i];
  }
  if (prices[prices.length - 1] > currentMin) result = result + prices[prices.length - 1] - currentMin;
  return result;
};