/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
  let dp = new Array(grid.length).fill(null).map(() => new Array(grid[0].length).fill(null).map(() => new Set()));
  if (grid[0][0] === ')') return false;
  dp[0][0].add(1);
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < dp[i].length; j++) {
      if (dp[i - 1]) {
        for (let v of dp[i - 1][j]) {
          if (grid[i][j] === '(') {
            dp[i][j].add(v + 1);
          } else {
            if (v - 1 >= 0) dp[i][j].add(v - 1);
          }
        }
      }
      if (dp[i][j - 1] !== undefined) {
        for (let v of dp[i][j - 1]) {
          if (grid[i][j] === '(') {
            dp[i][j].add(v + 1);
          } else {
            if (v - 1 >= 0) dp[i][j].add(v - 1);
          }
        }
      }
    }
  }
  for (let v of dp[dp.length - 1][dp[0].length - 1]) {
    if (v === 0) return true;
  }
  return false;
};
