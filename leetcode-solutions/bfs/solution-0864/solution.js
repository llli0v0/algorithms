/**
 * @param {string[]} grid
 * @return {number}
 */
var shortestPathAllKeys = function(grid) {
  for (let i = 0; i < grid.length; i++) {
    grid[i] = grid[i].split('');
  }

  let s;
  let K = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '@') {
        s = [i, j];
      } else if (/[a-f]/.test(grid[i][j])) {
        K.push(grid[i][j]);
      }
    }
  }

  let result = 10**8;
  helper(s, '', 0);
  return result === 10**8 ? -1 : result;

  function helper(s, keys, len) {
    if (result < len) return;
    let S = [s];
    let N = [];
    let V = new Set();
    let L = 0;

    while (S.length) {
      let a = S.shift();

      if (!V.has(a.join())) {
        V.add(a.join());
        if (
          /[a-f]/.test(grid[a[0]][a[1]]) &&
          keys.indexOf(grid[a[0]][a[1]]) === -1
        ) {
          if (keys.length + 1 === K.length) {
            result = Math.min(result, len + L);
          }
          helper([a[0], a[1]], keys + grid[a[0]][a[1]], len + L);
        }

        if (
          !/[A-F]/.test(grid[a[0]][a[1]]) ||
          (
            /[A-F]/.test(grid[a[0]][a[1]]) &&
            keys.indexOf(grid[a[0]][a[1]].toLowerCase()) !== -1
          )
        ) {
          if (grid[a[0] - 1] && grid[a[0] - 1][a[1]] !== '#') N.push([a[0] - 1, a[1]]);
          if (grid[a[0] + 1] && grid[a[0] + 1][a[1]] !== '#') N.push([a[0] + 1, a[1]]);
          if (grid[a[0]][a[1] - 1] && grid[a[0]][a[1] - 1] !== '#') N.push([a[0], a[1] - 1]);
          if (grid[a[0]][a[1] + 1] && grid[a[0]][a[1] + 1] !== '#') N.push([a[0], a[1] + 1]);
        }
      }

      if (!S.length) {
        S = N;
        N = [];
        L++;
      }
    }
  }
};