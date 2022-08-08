/**
 * @param {number[][]} grid
 * @return {number}
 */
var countPaths = function(grid) {
  let dp = {};
  let res = 0;
  let mod = 10**9 + 7;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      res += helper(i, j);
      res %= mod;
    }
  }
  return res;

  function helper(x, y) {
    let key = `${x} ${y}`;
    if (dp[key] !== undefined) return dp[key];
    dp[key] = 1;
    if (x - 1 >= 0 && grid[x - 1][y] > grid[x][y]) {
      dp[key] += helper(x - 1, y);
    }
    if (x + 1 < grid.length && grid[x + 1][y] > grid[x][y]) {
      dp[key] += helper(x + 1, y);
    }
    if (y - 1 >= 0 && grid[x][y - 1] > grid[x][y]) {
      dp[key] += helper(x, y - 1);
    }
    if (y + 1 < grid[0].length && grid[x][y + 1] > grid[x][y]) {
      dp[key] += helper(x, y + 1);
    }
    dp[key] %= mod;
    return dp[key];
  }
};
