/**
 * @param {number[][]} grid
 * @return {number}
 */
var minTotalDistance = function(grid) {
  let A = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) A.push([i, j]);
    }
  }
  let result = Infinity;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let a = 0;
      for (let n = 0; n < A.length; n++) {
        a += Math.abs(A[n][0] - i) + Math.abs(A[n][1] - j);
      }
      result = Math.min(result, a);
    }
  }
  return result;
};