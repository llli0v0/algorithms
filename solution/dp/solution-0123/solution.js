/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let currentMin = prices[0], subs = [], subBest = {}, reverseSubBest = {}, currentMax, result = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < prices[i - 1]) {
      subs.push([currentMin, prices[i - 1]]);
      currentMin = prices[i];
    }
  }
  if (prices[prices.length - 1] > currentMin) subs.push([currentMin, prices[prices.length - 1]]);
  if (!subs.length) return 0;
  currentMin = subs[0][0];
  subBest['0-0'] = subs[0][1] - subs[0][0];
  for (let i = 1; i < subs.length; i++) {
    if (subs[i][0] < currentMin) currentMin = subs[i][0];
    subBest['0-' + i] = Math.max(subBest['0-' + (i - 1)], subs[i][1] - currentMin);
  }
  currentMax = subs[subs.length - 1][1];
  reverseSubBest[subs.length - 1 + '-' + (subs.length - 1)] = subs[subs.length - 1][1] - subs[subs.length - 1][0];
  for (let i = subs.length - 2; i >= 0; i--) {
    if (subs[i][1] > currentMax) currentMax = subs[i][1];
    reverseSubBest[i + '-' + (subs.length - 1)] = Math.max(reverseSubBest[i + 1 + '-' + (subs.length - 1)], currentMax - subs[i][0]);
  }
  for (let i = 0; i < subs.length - 1; i++) {
    result = Math.max(result, subBest['0-' + i] + reverseSubBest[i + 1 + '-' + (subs.length - 1)]);
  }
  return Math.max(result, subBest['0-' + (subs.length - 1)]);
};