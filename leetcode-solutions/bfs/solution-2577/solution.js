/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumTime = function(grid) {
  let visited = new Set(['0 0']);
  let cur = [];
  if (grid[1][0] <= 1) cur.push([1, 0]);
  if (grid[0][1] <= 1) cur.push([0, 1]);
  let next = [];
  let waiting = {};
  let time = 1;
  while (cur.length) {
    if (waiting[time]) cur = cur.concat(waiting[time]);
    for (let i = 0; i < cur.length; i++) {
      let [x, y] = cur[i];
      if (visited.has(`${x} ${y}`)) continue;
      visited.add(`${x} ${y}`);
      if (x === grid.length - 1 && y === grid[0].length - 1) return time;
      let arr = [];
      if (grid[x + 1]) arr.push([x + 1, y]);
      if (grid[x - 1]) arr.push([x - 1, y]);
      if (grid[x][y + 1] !== undefined) arr.push([x, y + 1]);
      if (grid[x][y - 1] !== undefined) arr.push([x, y - 1]);
      for (let j = 0; j < arr.length; j++) {
        let [m, n] = arr[j];
        if (grid[m][n] <= time + 1) next.push([m, n]);
        else {
          let b = Math.ceil((grid[m][n] - 1 - time) / 2);
          let waitKey = b * 2 + 1 + time;
          waiting[waitKey] = waiting[waitKey] ?? [];
          waiting[waitKey].push([m, n]);
        }
      }
    }
    time++;
    cur = next;
    if (!cur.length) {
      while (time < 500000) {
        if (waiting[time]) {
          cur = waiting[time];
          break;
        }
        time++;
      }
    }
    next = [];
  }
  return -1;
};
