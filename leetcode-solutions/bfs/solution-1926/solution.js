/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
  let arr = [entrance];
  let next = [];
  let visited = new Set();
  let result = 0;
  let has = false;
  while (arr.length) {
    let cur = arr.shift();
    let [a, b] = cur;
    if (visited.has(cur.toString())) {
      if (arr.length === 0) {
        arr = next;
        next = [];
        result++;
      }
      continue;
    }
    visited.add(cur.toString());
    if ((a === 0 || b === 0 || a === maze.length - 1 || b === maze[0].length - 1) && (a !== entrance[0] || b !== entrance[1])) {
      has = true;
      break;
    }
    if (maze[a - 1] && maze[a - 1][b] === '.') next.push([a - 1, b]);
    if (maze[a + 1] && maze[a + 1][b] === '.') next.push([a + 1, b]);
    if (maze[a][b - 1] === '.') next.push([a, b - 1]);
    if (maze[a][b + 1] === '.') next.push([a, b + 1]);
    if (arr.length === 0) {
      arr = next;
      next = [];
      result++;
    }
  }
  return has ? result : -1;
};
