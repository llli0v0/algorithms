/**
 * @param {number} n
 * @return {number}
 */
var minimumBoxes = function(n) {
  let L = 0;
  let R = n;
  while (L < R) {
    let M = Math.floor((L + R) / 2);
    let a = helper(M);
    let b = M - (1 + a) * a / 2;
    let count = (1 + b) * b / 2;
    for (let i = 0; i <= a; i++) {
      count += (1 + i) * i / 2;
    }
    if (count > n) {
      R = M;
    } else if (count === n) {
      return M;
    } else {
      L = M + 1;
    }
  }
  return L;

  function helper(M) {
    let l = 0;
    let r = M;
    while (l < r) {
      let m = Math.floor((l + r) / 2);
      let count = (1 + m) * m / 2;
      if (count > M) {
        r = m;
      } else if (count === M || M > count && M < (1 + m + 1) * (m + 1) / 2) {
        return m;
      } else {
        l = m + 1;
      }
    }
    return l;
  }
};