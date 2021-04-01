/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var kInversePairs = function(n, k) {
  let mod = 10**9 + 7;
  let dp = new Array(n + 1).fill(null).map(() => new Array(k + 1).fill(null).map(() => [0, 0]));
  for (let i = 1; i < dp.length; i++) dp[i][0] = [1, 1];
  dp[2] && dp[2][1] && (dp[2][1] = [1, 2]);
  for (let i = 2; dp[2] && i < dp[2].length; i++) dp[2][i] && (dp[2][i][1] = 2);
  for (let i = 3; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      let m = Math.min(i - 1, j) + 1;
      dp[i][j][0] = (dp[i - 1][j][1] + mod - (dp[i - 1][j - m] === undefined ? 0 : dp[i - 1][j - m][1])) % mod;
      dp[i][j][1] = (dp[i][j][0] + dp[i][j - 1][1]) % mod;
    }
  }
  return dp[n][k][0];
};
