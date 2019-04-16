/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  let result = [];
  for (let i = 1; i <= 9; i++) {
    fm('' + i, i + 1, k - 1, n - i);
  }
  return result;
  function fm(s, m, k, n) {
    if (k === 0) {
      if (n === 0) {
        result.push(s.split('_').map(i => parseInt(i)));
      }
      return;
    }
    for (let i = m; i <= 9; i++) {
      fm(s + '_' + i, i + 1, k - 1, n - i);
    }
  }
};