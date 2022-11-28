/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
  let rows = [];
  let cols = new Array(grid[0].length).fill(0);
  for (let i = 0; i < grid.length; i++) {
    let count = 0;
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j]) {
        count++;
        cols[j]++;
      }
    }
    rows.push(count);
  }
  let res = new Array(grid.length).fill(null).map(() => new Array(grid[0].length).fill(0));
  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < res[i].length; j++) {
      res[i][j] = rows[i] + cols[j] - (grid[0].length - rows[i]) - (grid.length - cols[j]);
    }
  }
  return res;
};
