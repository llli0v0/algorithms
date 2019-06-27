/**
 * @param {number[][]} maze
 * @param {number[]} ball
 * @param {number[]} hole
 * @return {string}
 */
var findShortestWay = function(maze, ball, hole) {
  let A = [[ball, [0, 0, 0, 0], '', 0]];
  if (maze[ball[0] - 1] && maze[ball[0] - 1][ball[1]] !== 1) A[0][1][0] = 1;
  if (maze[ball[0] + 1] && maze[ball[0] + 1][ball[1]] !== 1) A[0][1][1] = 1;
  if (maze[ball[0]][ball[1] - 1] !== undefined && maze[ball[0]][ball[1] - 1] !== 1) A[0][1][2] = 1;
  if (maze[ball[0]][ball[1] + 1] !== undefined && maze[ball[0]][ball[1] + 1] !== 1) A[0][1][3] = 1;
  let V = {};
  let result = [];
  let M = Infinity;
  while (A.length) {
    let a = A.shift();
    if (V[a[0].join()] && a[3] > V[a[0].join()]) continue;
    V[a[0].join()] = a[3];
    let t = [null, [0, 0, 0, 0], a[2] + 'u', a[3]];
    if (a[1][0]) {
      let i = a[0][0];
      let T = false;
      while (maze[i - 1] && maze[i - 1][a[0][1]] !== 1) {
        if (i - 1 === hole[0] && a[0][1] === hole[1]) {
          if (t[3] < M) {
            M = t[3];
            result = [t[2]];
          } else if (t[3] === M) {
            result.push(t[2]);
          }
          T = true;
          break;
        }
        i--;
        t[3]++;
      }
      if (!T) {
        t[0] = [i, a[0][1]];
        if (maze[t[0][0]][t[0][1] - 1] !== undefined && maze[t[0][0]][t[0][1] - 1] !== 1) t[1][2] = 1;
        if (maze[t[0][0]][t[0][1] + 1] !== undefined && maze[t[0][0]][t[0][1] + 1] !== 1) t[1][3] = 1;
      }
    }
    let b = [null, [0, 0, 0, 0], a[2] + 'd', a[3]];
    if (a[1][1]) {
      let i = a[0][0];
      let T = false;
      while (maze[i + 1] && maze[i + 1][a[0][1]] !== 1) {
        if (i + 1 === hole[0] && a[0][1] === hole[1]) {
          if (b[3] < M) {
            M = b[3];
            result = [b[2]];
          } else if (b[3] === M) {
            result.push(b[2]);
          }
          T = true;
          break;
        }
        i++;
        b[3]++;
      }
      if (!T) {
        b[0] = [i, a[0][1]];
        if (maze[b[0][0]][b[0][1] - 1] !== undefined && maze[b[0][0]][b[0][1] - 1] !== 1) b[1][2] = 1;
        if (maze[b[0][0]][b[0][1] + 1] !== undefined && maze[b[0][0]][b[0][1] + 1] !== 1) b[1][3] = 1;
      }
    }
    let l = [null, [0, 0, 0, 0], a[2] + 'l', a[3]];
    if (a[1][2]) {
      let i = a[0][1];
      let T = false;
      while (maze[a[0][0]][i - 1] !== undefined && maze[a[0][0]][i - 1] !== 1) {
        if (a[0][0] === hole[0] && i - 1 === hole[1]) {
          if (l[3] < M) {
            M = l[3];
            result = [l[2]];
          } else if (l[3] === M) {
            result.push(l[2]);
          }
          T = true;
          break;
        }
        i--;
        l[3]++;
      }
      if (!T) {
        l[0] = [a[0][0], i];
        if (maze[l[0][0] - 1] && maze[l[0][0] - 1][l[0][1]] !== 1) l[1][0] = 1;
        if (maze[l[0][0] + 1] && maze[l[0][0] + 1][l[0][1]] !== 1) l[1][1] = 1;
      }
    }
    let r = [null, [0, 0, 0, 0], a[2] + 'r', a[3]];
    if (a[1][3]) {
      let i = a[0][1];
      let T = false;
      while (maze[a[0][0]][i + 1] !== undefined && maze[a[0][0]][i + 1] !== 1) {
        if (a[0][0] === hole[0] && i + 1 === hole[1]) {
          if (r[3] < M) {
            M = r[3];
            result = [r[2]];
          } else if (r[3] === M) {
            result.push(r[2]);
          }
          T = true;
          break;
        }
        i++;
        r[3]++;
      }
      if (!T) {
        r[0] = [a[0][0], i];
        if (maze[r[0][0] - 1] && maze[r[0][0] - 1][r[0][1]] !== 1) r[1][0] = 1;
        if (maze[r[0][0] + 1] && maze[r[0][0] + 1][r[0][1]] !== 1) r[1][1] = 1;
      }
    }
    if (t[0]) A.push(t);
    if (b[0]) A.push(b);
    if (l[0]) A.push(l);
    if (r[0]) A.push(r);
  }
  result.sort();
  return result.length ? result[0] : 'impossible';
};