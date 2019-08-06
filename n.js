/**
 * @param {number[][]} grid
 * @param {number[][]} hits
 * @return {number[]}
 */
var hitBricks = function(grid, hits) {
  let M = {};
  let S = null;

  let result = new Array(hits.length).fill(null);

  for (let i = 0; i < hits.length; i++) {
    if (grid[hits[i][0]][hits[i][1]]) {
      grid[hits[i][0]][hits[i][1]] = 0;
    } else {
      result[i] = 0;
    }
  }

  for (let i = 0; i < grid.length; i++) {
    M[i] = {};
    for (let j = 0; j < grid[i].length; j++) {
      if (i === 3 && j === 3) debugger;
      if (grid[i][j]) {
        M[i][j] = new Node(i, j);

        if (i === 0) {
          if (S === null) {
            S = M[i][j];
          } else {
            M[i][j].P = S;
          }
          continue;
        }
        
        if (M[i - 1] && M[i - 1][j] && M[i - 1][j].parent === S || M[i][j - 1] && M[i][j - 1].parent === S) {
          M[i][j].P = S;
          if (M[i - 1] && M[i - 1][j] && M[i - 1][j].parent !== S) M[i - 1][j].parent.P = S;
          if (M[i][j - 1] && M[i][j - 1].parent !== S) M[i][j - 1].parent.P = S;
        } else {
          if (M[i - 1] && M[i - 1][j] && M[i - 1][j].parent !== M[i][j]) {
            M[i][j].size += M[i - 1][j].parent.size;
            M[i - 1][j].parent.P = M[i][j];
          }
          if (M[i][j - 1] && M[i][j - 1].parent !== M[i][j]) {
            M[i][j].size += M[i][j - 1].parent.size;
            M[i][j - 1].parent.P = M[i][j];
          }
        }
      }
    }
  }

  for (let i = hits.length - 1; i >= 0; i--) {
    let x = hits[i][0];
    let y = hits[i][1];

    if (result[i] === null) {
      grid[x][y] = 1;
      M[x][y] = new Node(x, y);

      if (x === 0) {
        if (S === null) {
          S = M[x][y];
        } else {
          M[x][y].P = S;
        }
      }

      let s = [];

      if (M[x - 1] && M[x - 1][y]) s.push(M[x - 1][y]);
      if (M[x + 1] && M[x + 1][y]) s.push(M[x + 1][y]);
      if (M[x][y - 1]) s.push(M[x][y - 1]);
      if (M[x][y + 1]) s.push(M[x][y + 1]);

      if (s.some(item => item.parent === S) || M[x][y] === S || M[x][y].P === S && S !== null) {
        let r = 0;
        for (let j = 0; j < s.length; j++) {
          if (s[j].parent !== S) {
            r += s[j].parent.size;
            s[j].parent.P = M[x][y];
          }
        }
        if (M[x][y] !== S && M[x][y].P !== S) M[x][y].P = S;
        result[i] = r;
      } else {
        for (let j = 0; j < s.length; j++) {
          s[j].parent.P = M[x][y];
          M[x][y].size += s[j].parent.size;
        }
        result[i] = 0;
      }
    }
  }

  return result;
};

class Node {
  constructor(i, j) {
    this.P = null;
    this.size = 1;
    this.id = [i, j];
  }

  get parent() {
    if (this.P === null) return this;
    return this.P.parent;
  }
}

console.log(hitBricks([
  [1,1,0,1,0],
  [1,1,0,1,1],
  [0,0,0,1,1],
  [0,0,0,1,0],
  [0,0,0,0,0],
  [0,0,0,0,0]], [[5,1],[1,3]]));