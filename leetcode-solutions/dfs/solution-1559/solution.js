/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var containsCycle = function(grid) {
  let visited = new Set();
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (visited.has(`${i} ${j}`)) continue;
      if (isCycle(i, j)) return true;
    }
  }
  return false;
  
  function isCycle(i, j) {
    let val = grid[i][j];
    let arr = [[i, j]];
    while (arr.length) {
      let cur = arr.pop();
      let x = cur[0];
      let y = cur[1];
      visited.add(`${x} ${y}`);
      let same = [];
      if (grid[x - 1] && grid[x - 1][y] === val) same.push([x - 1, y]);
      if (grid[x + 1] && grid[x + 1][y] === val) same.push([x + 1, y]);
      if (grid[x][y - 1] === val) same.push([x, y - 1]);
      if (grid[x][y + 1] === val) same.push([x, y + 1]);
      if (same.filter(item => visited.has(`${item[0]} ${item[1]}`)).length > 1) return true;
      arr = arr.concat(same.filter(item => !visited.has(`${item[0]} ${item[1]}`)));
    }
    return false;
  }
};