/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
  let map = {};
  for (let i = 0; i < grid.length; i++) {
    let s = grid[i].join(' ');
    if (map[s] === undefined) map[s] = 0;
    map[s]++;
  }
  let res = 0;
  for (let i = 0; i < grid[0].length; i++) {
    let arr = [];
    for (let j = 0; j < grid.length; j++) {
      arr.push(grid[j][i]);
    }
    let s = arr.join(' ');
    if (map[s]) res += map[s];
  }
  return res;
};
