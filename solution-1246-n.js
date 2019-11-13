/**
 * @param {number[]} arr
 * @return {number}
 */
var minimumMoves = function(arr) {
  let dp = {};

  return helper(0, arr.length - 1, false);

  function helper(s, e, f) {
    if (s === e) return 1;
    if (s < e) return 0;

    let k = [s, e].toString();

    if (dp[k] !== undefined) return dp[k];

    dp[k] = 1 + helper(s + 1, e, false);

    for (let i = s + 1; i <= e; i++) {
      if (arr[i] === arr[s]) dp[k] = Math.min(dp[k], f ? (helper(s + 1, i - 1, true) + helper(i + 1, e, false)) : (1 + helper(s + 1, i - 1, true) + helper(i + 1, e, false)));
    }

    return dp[k];
  }
};