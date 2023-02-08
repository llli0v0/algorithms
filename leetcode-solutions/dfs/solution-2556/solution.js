/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var isPossibleToCutPath = function(grid) {
  if (!findPath()) return true;
  grid[0][0] = 1;
  if (!findPath()) return true;
  return false;

  function findPath() {
    let stack = [[0, 0]];
    while (stack.length) {
      let [x, y] = stack.pop();
      if (x === grid.length - 1 && y === grid[0].length - 1) return true;
      if (grid[x + 1] && grid[x + 1][y]) stack.push([x + 1, y]);
      if (grid[x][y + 1]) stack.push([x, y + 1]);
      grid[x][y] = 0;
    }
    return false;
  }
};
