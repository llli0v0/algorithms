/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands2 = function(grid) {
  let V = new Set();
  let S = new Set();

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] && !V.has([i, j].join())) {
        let A = helper(i, j);
        let X = {};
        let Y = {};
        let W = 0;

        for (let n = 0; n < A.length; n++) {
          let a = A[n];
          if (grid[a[0] - 1] !== undefined && grid[a[0] - 1][a[1]]) W++;
          if (grid[a[0] + 1] !== undefined && grid[a[0] + 1][a[1]]) W++;
          if (grid[a[0]][a[1] - 1]) W++;
          if (grid[a[0]][a[1] + 1]) W++;
        }

        for (let n = 0; n < A.length; n++) {
          if (X[A[n][0]] === undefined) X[A[n][0]] = 0;
          X[A[n][0]]++;
          if (Y[A[n][1]] === undefined) Y[A[n][1]] = 0;
          Y[A[n][1]]++;
        }

        let a = [];
        let b = [];
        for (let k in X) {
          a.push([k, X[k]]);
        }
        a.sort((x, y) => x[0] - y[0]);
        for (let c = 0; c < a.length; c++) a[c] = a[c][1];
        for (let k in Y) {
          b.push([k, Y[k]]);
        }
        b.sort((x, y) => x[0] - y[0]);
        for (let c = 0; c < b.length; c++) b[c] = b[c][1];

        let keys = [
          a.join() + '|' + b.join(),
          [...a].reverse().join() + '|' + b.join(),
          a.join() + '|' + [...b].reverse().join(),
          [...a].reverse().join() + '|' + [...b].reverse().join(),
          b.join() + '|' + a.join(),
          [...b].reverse().join() + '|' + a.join(),
          b.join() + '|' + [...a].reverse().join(),
          [...b].reverse().join() + '|' + [...a].reverse().join(),
        ];

        let F = false;
        for (let m = 0; m < keys.length; m++) {
          if (S.has(keys[m] + '|' + W)) {
            F = true;
            break;
          }
        }
        if (!F) S.add(keys[0] + '|' + W);
      }
    }
  }

  return S.size;

  function helper(x, y) {
    let A = [];
    let M = [[x, y]];

    while (M.length) {
      let a = M.pop();

      if (V.has(a.join())) continue;
      V.add(a.join());

      A.push(a);
      
      if (grid[a[0] - 1] !== undefined && grid[a[0] - 1][a[1]]) M.push([a[0] - 1, a[1]]);
      if (grid[a[0] + 1] !== undefined && grid[a[0] + 1][a[1]]) M.push([a[0] + 1, a[1]]);
      if (grid[a[0]][a[1] - 1]) M.push([a[0], a[1] - 1]);
      if (grid[a[0]][a[1] + 1]) M.push([a[0], a[1] + 1]);
    }

    return A;
  }
};
