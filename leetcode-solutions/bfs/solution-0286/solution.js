/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
  let D = [];
  for (let i = 0; i < rooms.length; i++) {
    for (let j = 0; j < rooms[i].length; j++) {
      if (rooms[i][j] === 0) D.push([i, j]);
    }
  }
  while (D.length) helper(D.shift());

  function helper(P) {
    let A = [P];
    let N = [];
    let V = new Set();
    let L = 0;
    while (A.length) {
      let a = A.shift();
      if (!V.has(a.join())) {
        V.add(a.join());
        rooms[a[0]][a[1]] = Math.min(rooms[a[0]][a[1]], L);
        if (rooms[a[0] - 1] && rooms[a[0] - 1][a[1]] !== 0 && rooms[a[0] - 1][a[1]] !== -1) N.push([a[0] - 1, a[1]]);
        if (rooms[a[0] + 1] && rooms[a[0] + 1][a[1]] !== 0 && rooms[a[0] + 1][a[1]] !== -1) N.push([a[0] + 1, a[1]]);
        if (rooms[a[0]][a[1] - 1] !== void 0 && rooms[a[0]][a[1] - 1] !== 0 && rooms[a[0]][a[1] - 1] !== -1) N.push([a[0], a[1] - 1]);
        if (rooms[a[0]][a[1] + 1] !== void 0 && rooms[a[0]][a[1] + 1] !== 0 && rooms[a[0]][a[1] + 1] !== -1) N.push([a[0], a[1] + 1]);
      }
      if (!A.length) {
        L += 1;
        A = N;
        N = [];
      }
    }
  }
};