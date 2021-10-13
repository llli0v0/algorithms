/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function(grid) {
  let sum1 = 0;
  let sum2 = 0;
  let preSum1 = [];
  let preSum2 = [];
  for (let i = 0; i < grid[0].length; i++) {
    sum1 += grid[0][i];
    sum2 += grid[1][i];
    preSum1.push(sum1);
    preSum2.push(sum2);
  }
  let result = Infinity;
  for (let i = 0; i < grid[0].length; i++) {
    let score2 = Math.max(sum1 - preSum1[i], preSum2[i - 1] === undefined ? 0 : preSum2[i - 1]);
    result = Math.min(result, score2);
  }
  return result;
};