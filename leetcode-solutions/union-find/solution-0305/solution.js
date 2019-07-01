class Land {
  constructor() {
    this.belong = null;
  }

  getBelog() {
    if (this.belong === null) return this;
    return this.belong.getBelog();
  }
}

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */
var numIslands2 = function(m, n, positions) {
  let matrix = new Array(m).fill(null).map(() => new Array(n).fill(0));
  let result = [];
  let C = 0;
  for (let i = 0; i < positions.length; i++) {
    result.push(helper(positions[i]));
  }
  return result;

  function helper(a) {
    if (matrix[a[0]][a[1]] instanceof Land) return C;

    let land = new Land();
    matrix[a[0]][a[1]] = land;
    C++;

    if (matrix[a[0] - 1] && matrix[a[0] - 1][a[1]] instanceof Land) {
      let b = matrix[a[0] - 1][a[1]].getBelog();
      if (b !== land) {
        b.belong = land;
        C--;
      }
    }
    if (matrix[a[0] + 1] && matrix[a[0] + 1][a[1]] instanceof Land) {
      let b = matrix[a[0] + 1][a[1]].getBelog();
      if (b !== land) {
        b.belong = land;
        C--;
      }
    }
    if (matrix[a[0]][a[1] - 1] instanceof Land) {
      let b = matrix[a[0]][a[1] - 1].getBelog();
      if (b !== land) {
        b.belong = land;
        C--;
      }
    }
    if (matrix[a[0]][a[1] + 1] instanceof Land) {
      let b = matrix[a[0]][a[1] + 1].getBelog();
      if (b !== land) {
        b.belong = land;
        C--;
      }
    }
    return C;
  }
};