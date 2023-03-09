/**
 * @param {number[][]} ranges
 * @return {number}
 */
var countWays = function(ranges) {
  ranges.sort((a, b) => {
    let lena = a[1] - a[0];
    let lenb = b[1] - b[0];
    if (a[0] === b[0]) {
      return lenb - lena;
    }
    return a[0] - b[0];
  });
  let res = 2;
  let mod = 10**9 + 7;
  let right = ranges[0][1];
  for (let i = 1; i < ranges.length; i++) {
    let [a, b] = ranges[i];
    if (a <= right) {
      right = Math.max(right, b);
    } else {
      res *= 2;
      res %= mod;
      right = b;
    }
  }
  return res;
};
