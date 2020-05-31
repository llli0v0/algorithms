/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
  let computed = {};
  return dp(0, 0, 0, 0) < 0 ? 0 : dp(0, 0, 0, 0);

  function dp(x, y, m, n) {
    if (grid[x][y] === -1 || grid[m][n] === -1) return -Infinity;
    if (x === grid.length - 1 && y === grid[0].length - 1 && m === grid.length - 1 && y === grid[0].length - 1) return grid[x][y];
    let key = x + '-' + y + '-' + m + '-' + n;
    if (computed[key] !== undefined) return computed[key];
    let a = grid[x + 1]
    let b = grid[x][y + 1] !== undefined;
    let c = grid[m + 1];
    let d = grid[m][n + 1] !== undefined;
    let v = x === m && y === n ? grid[x][y] : grid[x][y] + grid[m][n];
    computed[key] = Math.max(
      a && c ? v + dp(x + 1, y, m + 1, n) : -Infinity,
      a && d ? v + dp(x + 1, y, m, n + 1) : -Infinity,
      b && c ? v + dp(x, y + 1, m + 1, n) : -Infinity,
      b && d ? v + dp(x, y + 1, m, n + 1) : -Infinity
    );
    return computed[key];
  }
};