/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (!prices.length) return 0;
  let currentMin = prices[0], subBest = { 0: 0 };
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < currentMin) currentMin = prices[i];
    subBest[i] = Math.max(subBest[i - 1], prices[i] - currentMin);
  }
  return subBest[prices.length - 1];
};