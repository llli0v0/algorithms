/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let aler = new Set();
  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let arr = [];
      if (grid[i][j] === 1 && !aler.has([i, j].join('_'))) arr.push([i, j]);
      let area = 0;
      while (arr.length) {
        let el = arr.pop();
        if (aler.has(el.join('_'))) continue;
        area++;
        aler.add(el.join('_'));
        if (grid[el[0]][el[1] - 1] === 1) arr.push([el[0], el[1] - 1]);
        if (grid[el[0]][el[1] + 1] === 1) arr.push([el[0], el[1] + 1]);
        if (grid[el[0] - 1] && grid[el[0] - 1][el[1]] === 1) arr.push([el[0] - 1, el[1]]);
        if (grid[el[0] + 1] && grid[el[0] + 1][el[1]] === 1) arr.push([el[0] + 1, el[1]]);
      }
      if (area > result) result = area;
    }
  }
  return result;
};

maxAreaOfIsland([[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]);