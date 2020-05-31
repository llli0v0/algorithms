/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
  let computed = {};
  return dp(0, grid[0].length - 1, 0);

  function dp(a, b, row) {
    if (row === grid.length) return 0;
    let key = a + '-' + b + '-' + row;
    if (computed[key] !== undefined) return computed[key];
    computed[key] = 0;
    let arr1 = [a - 1, a, a + 1];
    let arr2 = [b - 1, b, b + 1];
    a - 1 < 0 && (arr1.shift());
    a + 1 > grid[0].length - 1 && (arr1.pop());
    b - 1 < 0 && (arr2.shift());
    b + 1 > grid[0].length - 1 && (arr2.pop());
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        computed[key] = Math.max(computed[key], (a === b ? grid[row][a] : grid[row][a] + grid[row][b]) + dp(arr1[i], arr2[j], row + 1));
      }
    }
    return computed[key];
  }
};