/**
 * @param {number} n
 * @return {number}
 */
var countHousePlacements = function(n) {
  let dp = [[1, 1, 1, 1]];
  let mod = 10**9 + 7;
  for (i = 1; i < n; i++) {
    let [a, b, c, d] = dp[dp.length - 1];
    dp.push([(a + b + c + d) % mod, (a + c) % mod, (a + b) % mod, a % mod]);
  }
  return dp[dp.length - 1].reduce((a, b) => (a + b) % mod);
};
