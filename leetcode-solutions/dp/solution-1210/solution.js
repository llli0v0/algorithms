/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumMoves = function(grid) {
  let dp = { '0,1,0,0': 0 };

  let result = helper([grid.length - 1, grid[0].length - 1], [grid.length - 1, grid[0].length - 2]);

  return result > 10 ** 9 ? -1 : result;

  function helper(head, tail) {
    let k = [head, tail].toString();

    if (dp[k] !== undefined) return dp[k];

    dp[k] = Infinity;

    let x = head[0] === tail[0] ? true : false;
    let y = head[1] === tail[1] ? true : false;

    if (x) {
      if (grid[tail[0]][tail[1] - 1] === 0) dp[k] = Math.min(dp[k], helper([...tail], [tail[0], tail[1] - 1]) + 1);
      if (grid[tail[0] + 1] && grid[tail[0] + 1][tail[1]] === 0 && grid[tail[0] + 1][tail[1] + 1] === 0) dp[k] = Math.min(dp[k], helper([tail[0] + 1, tail[1]], [...tail]) + 1);
      if (grid[head[0] - 1] && grid[head[0] - 1][head[1]] === 0 && grid[tail[0] - 1] && grid[tail[0] - 1][tail[1]] === 0) dp[k] = Math.min(dp[k], helper([head[0] - 1, head[1]], [tail[0] - 1, tail[1]]) + 1);
    }

    if (y) {
      if (grid[tail[0] - 1] && grid[tail[0] - 1][tail[1]] === 0) dp[k] = Math.min(dp[k], helper([...tail], [tail[0] - 1, tail[1]]) + 1);
      if (grid[tail[0]][tail[1] + 1] === 0 && grid[head[0]][head[1] + 1] === 0) dp[k] = Math.min(dp[k], helper([tail[0], tail[1] + 1], [...tail]) + 1);
      if (grid[head[0]][head[1] - 1] === 0 && grid[tail[0]][tail[1] - 1] === 0) dp[k] = Math.min(dp[k], helper([head[0], head[1] - 1], [tail[0], tail[1] - 1]) + 1);
    }

    return dp[k];
  }
};