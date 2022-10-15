/**
 * @param {number[]} power
 * @return {number}
 */
var minimumTime = function(power) {
  let dp = {};
  return helper((1 << power.length) - 1);

  function helper(n) {
    if (n === 0) return 0;
    if (dp[n] !== undefined) return dp[n];
    dp[n] = Infinity;
    let one = 0;
    for (let i = 0; i < 17; i++) {
      if (((1 << i) & n) === (1 << i)) one++;
    }
    for (let i = 0; i < 17; i++) {
      if (((1 << i) & n) === (1 << i)) {
        let p = power[i];
        dp[n] = Math.min(dp[n], Math.ceil(p / one) + helper(n - (1 << i)));
      }
    }
    return dp[n];
  }
};
