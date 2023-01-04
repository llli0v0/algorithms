/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function(left, right) {
  let arr = new Array(right + 1).fill(true);
  arr[1] = false;
  for (let i = 2, end = Math.sqrt(right); i <= end; i++) {
    if (arr[i]) {
      let n = 2;
      while (i * n <= right) {
        arr[i * n] = false;
        n++;
      }
    }
  }
  let l;
  let res = Infinity;
  let minl;
  for (let i = Math.max(2, left); i <= right; i++) {
    if (arr[i]) {
      if (l && i - l < res) {
        res = i - l;
        minl = l;
      }
      l = i;
    }
  }
  if (minl) return [minl, minl + res];
  return [-1, -1];
};
