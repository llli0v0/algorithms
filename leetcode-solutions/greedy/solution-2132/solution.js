/**
 * @param {number[][]} grid
 * @param {number} stampHeight
 * @param {number} stampWidth
 * @return {boolean}
 */
var possibleToStamp = function(grid, stampHeight, stampWidth) {
  let sumGrid = new Array(grid.length).fill(null).map(() => new Array(grid[0].length).fill(0));
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    let rowSum = 0;
    for (let j = 0; j < grid[i].length; j++) {
      rowSum += grid[i][j];
      if (i - 1 >= 0) sumGrid[i][j] = rowSum + sumGrid[i - 1][j];
      else sumGrid[i][j] = rowSum;
      if (i + 1 >= stampHeight && j + 1 >= stampWidth) {
        let val = sumGrid[i][j] - (sumGrid[i - stampHeight] ? sumGrid[i - stampHeight][j] : 0) - (sumGrid[i][j - stampWidth] ? sumGrid[i][j - stampWidth] : 0) + 
        (sumGrid[i - stampHeight] && sumGrid[i - stampHeight][j - stampWidth] !== undefined ? sumGrid[i - stampHeight][j - stampWidth] : 0);
        if (val === 0) {
          for (let m = j; m > j - stampWidth; m--) {
            if (grid[i][m] === 2) break;
            for (let n = i; n > i - stampHeight; n--) {
              if (grid[n][m] === 2) break;
              grid[n][m] = 2;
              count++;
            }
          }
        }
      }
    }
  }
  if (count + sumGrid[sumGrid.length - 1][sumGrid[0].length - 1] === grid.length * grid[0].length) return true;
  return false;
};
