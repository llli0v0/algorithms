/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    find('' + i, i + 1, k - 1);
  }
  return result;
  function find(s, m, le) {
    if (le === 0) {
      result.push(s.split('_').map(i => parseInt(i)));
    }
    for (let i = m; i <= n; i++) {
      find(s + '_' + i, i + 1, le - 1);
    }
  }
};