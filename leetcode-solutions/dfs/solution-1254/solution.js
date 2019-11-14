/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
  let S = new Set();
  let result = 0;

  for (let i = 0; i < grid.length; i++) {
    if (grid[i][0] === 0) helper(i, 0);
    if (grid[i][grid[0].length - 1] === 0) helper(i, grid[0].length - 1);
  }
  for (let i = 0; i < grid[0].length; i++) {
    if (grid[0][i] === 0) helper(0, i);
    if (grid[grid.length - 1][i] === 0) helper(grid.length - 1, i);
  }

  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[i].length - 1; j++) {
      if (grid[i][j] === 0 && !S.has([i, j].toString())) {
        helper(i, j);
        result++;
      }
    }
  }

  return result;

  function helper(i, j) {
    let A = [[i, j]];

    while (A.length) {
      let a = A.pop();

      if (S.has(a.toString())) continue;
      S.add(a.toString());

      if (grid[a[0] - 1] && grid[a[0] - 1][a[1]] === 0) A.push([a[0] - 1, a[1]]);
      if (grid[a[0] + 1] && grid[a[0] + 1][a[1]] === 0) A.push([a[0] + 1, a[1]]);
      if (grid[a[0]][a[1] - 1] === 0) A.push([a[0], a[1] - 1]);
      if (grid[a[0]][a[1] + 1] === 0) A.push([a[0], a[1] + 1]);
    }
  }
};