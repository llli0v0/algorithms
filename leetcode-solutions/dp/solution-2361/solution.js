/**
 * @param {number[]} regular
 * @param {number[]} express
 * @param {number} expressCost
 * @return {number[]}
 */
var minimumCosts = function(regular, express, expressCost) {
  let dp = new Array(regular.length).fill(null).map(() => [0, 0]);
  dp[0] = [regular[0], expressCost + express[0]];
  for (let i = 1; i < dp.length; i++) {
    dp[i][0] = Math.min(dp[i - 1][0], dp[i - 1][1]) + regular[i];
    dp[i][1] = Math.min(dp[i - 1][0] + expressCost, dp[i - 1][1]) + express[i];
  }
  return dp.map(item => Math.min(...item));
};
