/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var numberOfPaths = function(grid, k) {
  let dp = {};
  let mod = 10**9 + 7;
  return helper(grid.length - 1, grid[0].length - 1, 0);

  function helper(x, y, m) {
    if (x === 0 && y === 0) {
      if ((m + grid[0][0]) % k === 0) return 1;
      return 0;
    }
    let key = `${x} ${y}`;
    if (dp[key] === undefined) dp[key] = {};
    if (dp[key][m] !== undefined) return dp[key][m];
    dp[key][m] = 0;
    let n = (m + grid[x][y]) % k;
    if (x - 1 >= 0) {
      dp[key][m] += helper(x - 1, y, n);
    }
    if (y - 1 >= 0) {
      dp[key][m] += helper(x, y - 1, n);
    }
    dp[key][m] %= mod;
    return dp[key][m];
  }
};
