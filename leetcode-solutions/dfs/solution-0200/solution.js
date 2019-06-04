/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let v = new Set();
  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1' && !v.has(i + ' ' + j)) {
        helper(i, j);
        result += 1;
      }
    }
  }
  return result;
  function helper(i, j) {
    let s = [[i, j]];
    while (s.length) {
      let e = s.pop();
      if (v.has(e[0] + ' ' + e[1])) continue;
      v.add(e[0] + ' ' + e[1]);
      if (grid[e[0] + 1] && grid[e[0] + 1][e[1]] === '1' && !v.has(e[0] + 1 + ' ' + e[1])) s.push([e[0] + 1, e[1]]);
      if (grid[e[0] - 1] && grid[e[0] - 1][e[1]] === '1' && !v.has(e[0] - 1 + ' ' + e[1])) s.push([e[0] - 1, e[1]]);
      if (grid[e[0]][e[1] + 1] === '1' && !v.has(e[0] + ' ' + (e[1] + 1))) s.push([e[0], e[1] + 1]);
      if (grid[e[0]][e[1] - 1] === '1' && !v.has(e[0] + ' ' + (e[1] - 1))) s.push([e[0], e[1] - 1]);
    }
  }
};