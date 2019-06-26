/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
var hasPath = function(maze, start, destination) {
  let A = [[start, [0, 0, 0, 0]]];
  if (maze[start[0] - 1] && maze[start[0] - 1][start[1]] !== 1) A[0][1][0] = 1;
  if (maze[start[0] + 1] && maze[start[0] + 1][start[1]] !== 1) A[0][1][1] = 1;
  if (maze[start[0]][start[1] - 1] !== undefined && maze[start[0]][start[1] - 1] !== 1) A[0][1][2] = 1;
  if (maze[start[0]][start[1] + 1] !== undefined && maze[start[0]][start[1] + 1] !== 1) A[0][1][3] = 1;
  let V = new Set();
  while (A.length) {
    let a = A.shift();
    if (V.has(a[0].join())) continue;
    V.add(a[0].join());
    let t = [null, [0, 0, 0, 0]];
    if (a[1][0]) {
      let i = a[0][0];
      while (maze[i - 1] && maze[i - 1][a[0][1]] !== 1) {
        if (i - 1 === destination[0] && a[0][1] === destination[1] && (maze[destination[0] - 1] === undefined || maze[destination[0] - 1][destination[1]] === 1)) return true;
        i--;
      }
      t[0] = [i, a[0][1]];
      if (maze[t[0][0]][t[0][1] - 1] !== undefined && maze[t[0][0]][t[0][1] - 1] !== 1) t[1][2] = 1;
      if (maze[t[0][0]][t[0][1] + 1] !== undefined && maze[t[0][0]][t[0][1] + 1] !== 1) t[1][3] = 1;
    }
    let b = [null, [0, 0, 0, 0]];
    if (a[1][1]) {
      let i = a[0][0];
      while (maze[i + 1] && maze[i + 1][a[0][1]] !== 1) {
        if (i + 1 === destination[0] && a[0][1] === destination[1] && (maze[destination[0] + 1] === undefined || maze[destination[0] + 1][destination[1]] === 1)) return true;
        i++;
      }
      b[0] = [i, a[0][1]];
      if (maze[b[0][0]][b[0][1] - 1] !== undefined && maze[b[0][0]][b[0][1] - 1] !== 1) b[1][2] = 1;
      if (maze[b[0][0]][b[0][1] + 1] !== undefined && maze[b[0][0]][b[0][1] + 1] !== 1) b[1][3] = 1;
    }
    let l = [null, [0, 0, 0, 0]];
    if (a[1][2]) {
      let i = a[0][1];
      while (maze[a[0][0]][i - 1] !== undefined && maze[a[0][0]][i - 1] !== 1) {
        if (a[0][0] === destination[0] && i - 1 === destination[1] && (maze[destination[0]][destination[1] - 1] === undefined || maze[destination[0]][destination[1] - 1] === 1)) return true;
        i--;
      }
      l[0] = [a[0][0], i];
      if (maze[l[0][0] - 1] && maze[l[0][0] - 1][l[0][1]] !== 1) l[1][0] = 1;
      if (maze[l[0][0] + 1] && maze[l[0][0] + 1][l[0][1]] !== 1) l[1][1] = 1;
    }
    let r = [null, [0, 0, 0, 0]];
    if (a[1][3]) {
      let i = a[0][1];
      while (maze[a[0][0]][i + 1] !== undefined && maze[a[0][0]][i + 1] !== 1) {
        if (a[0][0] === destination[0] && i + 1 === destination[1] && (maze[destination[0]][destination[1] + 1] === undefined || maze[destination[0]][destination[1] + 1] === 1)) return true;
        i++;
      }
      r[0] = [a[0][0], i];
      if (maze[r[0][0] - 1] && maze[r[0][0] - 1][r[0][1]] !== 1) r[1][0] = 1;
      if (maze[r[0][0] + 1] && maze[r[0][0] + 1][r[0][1]] !== 1) r[1][1] = 1;
    }
    if (t[0]) A.push(t);
    if (b[0]) A.push(b);
    if (l[0]) A.push(l);
    if (r[0]) A.push(r);
  }
  return false;
};
