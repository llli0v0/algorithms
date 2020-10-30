/**
 * @param {number[][]} grid
 * @return {number}
 */
var minDays = function(grid) {
  let landCount = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j]) landCount++;
    }
  }
  if (landCount <= 1) return landCount;
  let once = false;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j]) {
        if (!once) {
          let land = findOneLand(grid);
          if (landCounter(land, grid) < landCount) return 0;
          once = true;
        }
        grid[i][j] = 0;
        let land = findOneLand(grid);
        if (landCounter(land, grid) < landCount - 1) return 1;
        grid[i][j] = 1;
      }
    }
  }
  return 2;

  function landCounter(land, grid) {
    let visited = new Set();
    let arr = [land];
    let count = 0;
    while (arr.length) {
      let cur = arr.pop();
      let x = cur[0];
      let y = cur[1];
      if (visited.has(cur.toString())) continue;
      visited.add(cur.toString());
      count++;
      if (grid[x - 1] && grid[x - 1][y]) arr.push([x - 1, y]);
      if (grid[x + 1] && grid[x + 1][y]) arr.push([x + 1, y]);
      if (grid[x][y - 1]) arr.push([x, y - 1]);
      if (grid[x][y + 1]) arr.push([x, y + 1]);
    }
    return count;
  }

  function findOneLand(grid) {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j]) return [i, j];
      }
    }
  }
};