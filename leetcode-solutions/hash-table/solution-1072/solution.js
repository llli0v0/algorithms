/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function(matrix) {
  let hash = {};
  for (let i = 0; i < matrix.length; i++) {
    let a = [];
    let b = [];
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        a.push(j);
      } else {
        b.push(j);
      }
    }
    let c;
    if (a.length < b.length) {
      c = a;
    } else if (a.length > b.length) {
      c = b;
    } else {
      if (a[0] < b[0]) {
        c = a;
      } else {
        c = b;
      }
    }
    let k = c.join();
    if (hash[k] === undefined) hash[k] = 0;
    hash[k] += 1;
  }
  let result = 0;
  for (let k in hash) result = Math.max(result, hash[k]);
  return result;
};