/**
 * @param {number} target
 * @return {number}
 */
var racecar = function(target) {
  let dp = new Array(target + 1).fill(0);
  return helper(target);

  function helper(target) {
    if (dp[target]) return dp[target];
    let n = Math.floor(Math.log2(target)) + 1;
    if (target === 2**n - 1) {
      dp[target] = n;
    } else {
      dp[target] = helper(2**n - 1 - target) + n + 1;
      for (let m = 0; m < n - 1; m++) {
        dp[target] = Math.min(dp[target], helper(target - 2**(n - 1) + 2**m) + n + m + 1);
      }
    }
    return dp[target];
  }
};