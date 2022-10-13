/**
 * @param {number} startPos
 * @param {number} endPos
 * @param {number} k
 * @return {number}
 */
var numberOfWays = function(startPos, endPos, k) {
  let dp = {};
  let mod = 10**9 + 7;
  return helper(endPos, k);

  function helper(endPos, k) {
    if (endPos === startPos && k === 0) return 1;
    else if (Math.abs(endPos - startPos) > k) return 0;
    let key = `${endPos} ${k}`;
    if (dp[key] !== undefined) return dp[key];
    return dp[key] = (helper(endPos - 1, k - 1) + helper(endPos + 1, k - 1)) % mod;
  }
};
