/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
  for (let i = 0; i < grid1.length; i++) {
    for (let j = 0; j < grid1[i].length; j++) {
      if (grid2[i][j]) {
        if (grid1[i][j]) grid1[i][j] = 2;
        else grid1[i][j] = 3;
      }
    }
  }
  let result = 0;
  let visited = new Set();
  for (let i = 0; i < grid2.length; i++) {
    for (let j = 0; j < grid2[i].length; j++) {
      if (grid1[i][j] === 2 && !visited.has(`${i} ${j}`)) {
        let arr = [[i, j]];
        let next = [];
        let is = true;
        while (arr.length) {
          let cur = arr.shift();
          if (grid1[cur[0]][cur[1]] === 3) is = false;
          if (visited.has(`${cur[0]} ${cur[1]}`)) {
            if (arr.length === 0) {
              arr = next;
              next = [];
            }
            continue;
          }
          visited.add(`${cur[0]} ${cur[1]}`);
          if (grid1[cur[0] - 1] !== undefined && (grid1[cur[0] - 1][cur[1]] === 2 || grid1[cur[0] - 1][cur[1]] === 3)) next.push([cur[0] - 1, cur[1]]);
          if (grid1[cur[0] + 1] !== undefined && (grid1[cur[0] + 1][cur[1]] === 2 || grid1[cur[0] + 1][cur[1]] === 3)) next.push([cur[0] + 1, cur[1]]);
          if (grid1[cur[0]][cur[1] - 1] === 2 || grid1[cur[0]][cur[1] - 1] === 3) next.push([cur[0], cur[1] - 1]);
          if (grid1[cur[0]][cur[1] + 1] === 2 || grid1[cur[0]][cur[1] + 1] === 3) next.push([cur[0], cur[1] + 1]);
          if (arr.length === 0) {
            arr = next;
            next = [];
          }
        }
        if (is) result++;
      }
    }
  }
  return result;
};