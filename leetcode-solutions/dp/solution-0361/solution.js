/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function(grid) {
  if (!grid.length) return 0;
  let R = new Array(grid.length).fill(null).map(() => new Array(grid[0].length).fill(0));
  let C = new Array(grid.length).fill(null).map(() => new Array(grid[0].length).fill(0));
  for (let i = 0; i < grid.length; i++) {
    let a = 0;
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 'W') {
        a = 0;
      } else if (grid[i][j] === 'E' || grid[i][j] === '0') {
        grid[i][j] === 'E' && a++;
        R[i][j] = a;
      }
    }
  }
  for (let i = 0; i < R.length; i++) {
    for (let j = R[i].length - 1; j >= 0; j--) {
      if (grid[i][j] !== 'W') {
        let a = R[i][j];
        while (j >= 0 && grid[i][j] !== 'W') {
          R[i][j] = a;
          j -= 1;
        }
      }
    }
  }
  for (let i = 0; i < grid[0].length; i++) {
    let a = 0;
    for (let j = 0; j < grid.length; j++) {
      if (grid[j][i] === 'W') {
        a = 0;
      } else if (grid[j][i] === 'E' || grid[j][i] === '0') {
        grid[j][i] === 'E' && a++;
        C[j][i] = a;
      }
    }
  }
  for (let i = 0; i < C[0].length; i++) {
    for (let j = C.length - 1; j >= 0; j--) {
      if (grid[j][i] !== 'W') {
        let a = C[j][i];
        while (j >= 0 && grid[j][i] !== 'W') {
          C[j][i] = a;
          j -= 1;
        }
      }
    }
  }
  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '0') result = Math.max(result, C[i][j] + R[i][j]);
    }
  }
  return result;
};
