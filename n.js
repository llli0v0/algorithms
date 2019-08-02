/**
 * @param {number[][]} grid
 * @param {number[][]} hits
 * @return {number[]}
 */
var hitBricks = function(grid, hits) {
  let M = {};

  let result = new Array(hits.length).fill(null);

  for (let i = 0; i < grid.length; i++) {
    M[i] = {};
    for (let j = 0; j < grid[i].length; j++) {
      M[i][j] = new Node();
    }
  }

  for (let i = 0; i < hits.length; i++) {
    if (grid[hits[i][0]][hits[i][1]]) {
      grid[hits[i][0]][hits[i][1]] = 0;
    } else {
      result[i] = 0;
    }
  }

  let S = null;

  for (let i = 0; i < grid[0].length; i++) {
    if (grid[0][i]) {
      if (!S) {
        S = M[0][i];
      } else {
        M[0][i].belong = S;
      }
    }
  }

  for (let i = 1; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j]) {
        if (grid[i - 1][j]) {
          M[i][j].size += M[i - 1][j].getBelong().size;
          M[i - 1][j].getBelong().belong = M[i][j];
        }
        if (grid[i][j - 1]) {
          M[i][j].size += M[i][j - 1].getBelong().size;
          M[i][j - 1].getBelong().belong = M[i][j];
        }
      }
    }
  }

  for (let i = hits.length - 1; i >= 0; i--) {
    let a = hits[i];

    let f = false;

    if (M[a[0] - 1] && M[a[0] - 1][a[1]]) {
      if (M[a[0] - 1][a[1]].getBelong() === S) {
        f = true;
      } else {
        if (M[a[0] - 1][a[1]].getBelong() !== M[a[0]][a[1]]) {
          M[a[0]][a[1]].size += M[a[0] - 1][a[1]].getBelong().size;
          M[a[0] - 1][a[1]].getBelong().belong = M[a[0]][a[1]];
        }
      }
    }

    if (M[a[0] + 1] && M[a[0] + 1][a[1]]) {
      if (M[a[0] + 1][a[1]].getBelong() === S) {
        f = true;
      } else {
        if (M[a[0] + 1][a[1]].getBelong() !== M[a[0]][a[1]]) {
          M[a[0]][a[1]].size += M[a[0] + 1][a[1]].getBelong().size;
          M[a[0] + 1][a[1]].getBelong().belong = M[a[0]][a[1]];
        }
      }
    }

    if (M[a[0]][a[1] - 1]) {
      if (M[a[0]][a[1] - 1].getBelong() === S) {
        f = true;
      } else {
        if (M[a[0]][a[1] - 1].getBelong() !== M[a[0]][a[1]]) {
          M[a[0]][a[1] - 1].size += M[a[0]][a[1] - 1].getBelong().size;
          M[a[0]][a[1] - 1].getBelong().belong = M[a[0]][a[1]];
        }
      }
    }

    if (M[a[0]][a[1] + 1]) {
      if (M[a[0]][a[1] + 1].getBelong() === S) {
        f = true;
      } else {
        if (M[a[0]][a[1] + 1].getBelong() !== M[a[0]][a[1]]) {
          M[a[0]][a[1] + 1].size += M[a[0]][a[1] + 1].getBelong().size;
          M[a[0]][a[1] + 1].getBelong().belong = M[a[0]][a[1]];
        }
      }
    }

    if (f) {
      S.size += M[a[0]][a[1]].size;
      result[i] = M[a[0]][a[1]].size - 1;
    }
  }

  return result;
};

class Node {
  constructor() {
    this.belong = null;
    this.size = 1;
  }

  getBelong() {
    if (!this.belong) return this;

    return this.belong.getBelong();
  }
}

console.log(hitBricks([
  [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
  [0, 1, 1, 0, 1, 0, 1, 1, 1, 0],
  [1, 1, 0, 1, 1, 1, 1, 0, 1, 0]
], [[1, 1], [1, 4], [1, 7]]));