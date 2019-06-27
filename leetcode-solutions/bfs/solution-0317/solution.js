/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestDistance = function(grid) {
  let result = 2**31;
  let COUNT = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) COUNT++;
    }
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 0) result = Math.min(result, helper(i, j));
    }
  }
  return result === 2**31 ? -1 : result;

  function helper(x, y) {
    let A = [[x, y]];
    let N = [];
    let V = new Set();
    let I = 0;
    let R = 0;
    let C = 0;
    while (A.length) {
      let a = A.shift();
      if (!V.has(a.join())) {
        V.add(a.join());
        if (grid[a[0]][a[1]] === 1) {
          R += I;
          C++;
        } else {
          if (grid[a[0] - 1] && grid[a[0] - 1][a[1]] !== 2) N.push([a[0] - 1, a[1]]);
          if (grid[a[0] + 1] && grid[a[0] + 1][a[1]] !== 2) N.push([a[0] + 1, a[1]]);
          if (grid[a[0]][a[1] + 1] !== undefined && grid[a[0]][a[1] + 1] !== 2) N.push([a[0], a[1] + 1]);
          if (grid[a[0]][a[1] - 1] !== undefined && grid[a[0]][a[1] - 1] !== 2) N.push([a[0], a[1] - 1]);
        }
      }
      if (!A.length) {
        I++;
        A = N;
        N = [];
      }
    }
    if (C === COUNT) return R;
    return Infinity;
  }
};