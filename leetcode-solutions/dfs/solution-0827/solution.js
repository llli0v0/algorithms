/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
  let n = 2;
  let result = 1;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        result = Math.max(result, helper(i, j, n++));
      }
    }
  }
  return Math.min(result, grid[0].length * grid.length);

  function helper(x, y, n) {
    let A = [[x, y]];
    let S = [];
    let area = 1;
    while (A.length) {
      let a = A.pop();
      if (grid[a[0]][a[1]] === 1) {
        area++;

        if (grid[a[0] - 1]) A.push([a[0] - 1, a[1]]);
        if (grid[a[0] + 1]) A.push([a[0] + 1, a[1]]);
        if (grid[a[0]][a[1] - 1] !== undefined) A.push([a[0], a[1] - 1]);
        if (grid[a[0]][a[1] + 1] !== undefined) A.push([a[0], a[1] + 1]);

        grid[a[0]][a[1]] = n;
      } else if (grid[a[0]][a[1]] === 0) {
        S.push(a);
      }
    }

    let N = 0;
    for (let i = 0; i < S.length; i++) {
      let s = S[i];
      let B = [];

      grid[s[0] - 1] && grid[s[0] - 1][s[1]] === 1 && (B.push([s[0] - 1, s[1]]));
      grid[s[0] + 1] && grid[s[0] + 1][s[1]] === 1 && (B.push([s[0] + 1, s[1]]));
      grid[s[0]][s[1] - 1] === 1 && (B.push([s[0], s[1] - 1]));
      grid[s[0]][s[1] + 1] === 1 && (B.push([s[0], s[1] + 1]));

      let m = 0;
      let V = new Set();
      while (B.length) {
        let b = B.pop();
        if (V.has(b.join())) continue;
        if (grid[b[0]][b[1]] === 1) {
          V.add(b.join());
          m++;

          if (grid[b[0] - 1] && grid[b[0] - 1][b[1]] === 1) B.push([b[0] - 1, b[1]]);
          if (grid[b[0] + 1] && grid[b[0] + 1][b[1]] === 1) B.push([b[0] + 1, b[1]]);
          if (grid[b[0]][b[1] - 1] === 1) B.push([b[0], b[1] - 1]);
          if (grid[b[0]][b[1] + 1] === 1) B.push([b[0], b[1] + 1]);
        }
      }
      
      N = Math.max(N, m);
    }
    return area + N;
  }
};