/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
  let computed = {};
  return helper(0, 0, k) > grid.length * grid[0].length ? -1 : helper(0, 0, k);

  function helper(x, y, k) {
    if (k <= 0 && grid[x][y] === 1) return Infinity;
    if (x === grid.length - 1 && y === grid[0].length - 1) return 0;
    let key = `${x} ${y} ${k}`;
    if (computed[key] !== undefined) return computed[key];
    computed[key] = Infinity;
    if (grid[x][y] === 1) k--;
    return computed[key] = Math.min(
      computed[key],
      x + 1 < grid.length ? helper(x + 1, y, k) + 1 : Infinity,
      y + 1 < grid[0].length ? helper(x, y + 1, k) + 1 : Infinity,
      x - 1 >= 0 ? helper(x - 1, y, k) + 1 : Infinity,
      y - 1 >= 0 ? helper(x, y - 1, k) + 1 : Infinity
    );
  }
};