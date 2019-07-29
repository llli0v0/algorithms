/**
 * @param {number[][]} grid
 * @return {number}
 */
var largest1BorderedSquare = function(grid) {
  if (grid.every(i => i.every(j => j === 0))) return 0;

  let C = [0, 0, 0];

  if (grid[0][0]) {
    grid[0][0] = [1, 1, 1];
  } else {
    grid[0][0] = [0, 0, 0];
  }

  for (let i = 1; i < grid.length; i++) {
    if (grid[i][0]) {
      grid[i][0] = [1, grid[i - 1][0][1] + 1, 1];
    } else {
      grid[i][0] = [0, grid[i - 1][0][1], 0];
    }
  }

  for (let i = 1; i < grid[0].length; i++) {
    if (grid[0][i]) {
      grid[0][i] = [grid[0][i - 1][0] + 1, 1, 1];
    } else {
      grid[0][i] = [grid[0][i - 1][0], 0, 0];
    }
  }

  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[i].length; j++) {
      if (i === 1 && j === 2) debugger;
      if (grid[i][j]) {
        grid[i][j] = [grid[i][j - 1][0] + 1, grid[i - 1][j][1] + 1, grid[i][j]];

        let f = true;
        
        let a = Math.min(grid[i][j][0], grid[i][j][1]);

        while (a > C[2] && f) {
          if (
            grid[i - a + 1][j - a + 1][2] && grid[i - a + 1][j][2] && grid[i][j - a + 1][2] &&
            grid[i][j][0] - grid[i][j - a + 1][0] === a - 1 &&
            grid[i][j][1] - grid[i - a + 1][j][1] === a - 1 &&
            grid[i][j - a + 1][1] - grid[i - a + 1][j - a + 1][1] === a - 1 &&
            grid[i - a + 1][j][0] - grid[i - a + 1][j - a + 1][0] === a - 1
          ) {
            C = [i, j, a];
            f = false;
          }

          a--;
        }
      } else {
        grid[i][j] = [grid[i][j - 1][0], grid[i - 1][j][1], grid[i][j]];
      }
    }
  }

  return C[2] ** 2 || 1;
};