/**
 * @param {number} target
 * @param {number[][]} types
 * @return {number}
 */
var waysToReachTarget = function(target, types) {
  let dp = new Array(target + 1).fill(null).map(() => new Array(types.length).fill(undefined));
  let mod = 10**9 + 7;
  return helper(target, 0);

  function helper(target, index) {
    if (target < 0 || target > 0 && index >= types.length) return 0;
    else if (target === 0) return 1;
    if (dp[target][index] !== undefined) return dp[target][index];
    let res = 0;
    for (let i = 0; i <= types[index][0]; i++) {
      let left = target - types[index][1] * i;
      if (left >= 0) {
        res += helper(left, index + 1);
        res %= mod;
      }
    }
    dp[target][index] = res;
    return res;
  }
};
