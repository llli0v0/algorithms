/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function(matrix) {
  let hash = {};
  for (let i = 0; i < matrix.length; i++) {
    let k = helper(matrix[i]);
    if (hash[k] === undefined) hash[k] = 0;
    hash[k] += 1;
  }
  let result = 0;
  for (let v in hash) {
    result = Math.max(result, hash[v]);
  }
  return result;
  function helper(l) {
    let z = [];
    let o = [];
    for (let i = 0; i < l.length; i++) {
      if (l[i] === 0) {
        z.push(i);
      } else {
        o.push(i);
      }
    }
    if (z.length === o.length) {
      if (z[0] > o[0]) return o.join();
      return z.join();
    }
    return z.length > o.length ? o.join() : z.join();
  }
};