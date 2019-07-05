/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
  for (let i = 0; i < strs.length; i++) {
    let a = 0;
    let b = 0;
    for (let j = 0; j < strs[i].length; j++) {
      if (strs[i][j] === '1') a++;
      else b++;
    }
    strs[i] = [a, b];
  }

  let result = 0;
  let dp = new Array(n + 1).fill(null).map(() => new Array(m + 1).fill(0));
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < dp[i].length; j++) {
      dp[i][j] = [0, new Set()];
      for (let n = 0; n < strs.length; n++) {
        if (
          dp[i - strs[n][0]] &&
          dp[i - strs[n][0]][j - strs[n][1]] !== undefined &&
          1 + dp[i - strs[n][0]][j - strs[n][1]][0] > dp[i][j][0] &&
          !dp[i - strs[n][0]][j - strs[n][1]][1].has(n)
        ) {
          dp[i][j][0] = 1 + dp[i - strs[n][0]][j - strs[n][1]][0];
          dp[i][j][1] = new Set(dp[i - strs[n][0]][j - strs[n][1]][1]);
          dp[i][j][1].add(n);
          result = Math.max(result, dp[i][j][0]);
        }
      }
    }
  }
  return result;
};