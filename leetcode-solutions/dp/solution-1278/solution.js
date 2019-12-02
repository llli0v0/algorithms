/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var palindromePartition = function(s, k) {
  let dp = {};

  return helper(0, k)

  function helper(start, k) {
    if (k === 0) {
      if (start > s.length - 1) return 0;
      return Infinity;
    }

    if (s.length - start < k) return Infinity;

    let key = [start, k].toString();

    if (dp[key] !== undefined) return dp[key];

    dp[key] = Infinity;

    for (let i = start; i < s.length; i++) {
      dp[key] = Math.min(dp[key], helper2(s.slice(start, i + 1)) + helper(i + 1, k - 1))
    }

    return dp[key];
  }

  function helper2(string) {
    let result = 0;

    for (let i = 0; i < Math.floor(string.length / 2); i++) {
      if (string[i] !== string[string.length - 1 - i]) result++;
    }

    return result;
  }
};