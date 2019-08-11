/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(m, n, k) {
  let L = 1;
  let R = m * n;

  while (L < R) {
    let M = Math.floor((L + R) / 2);
    let c = 0;

    for (let i = 1; i <= m; i++) {
      c += Math.min(Math.floor(M / i), n);
    }

    if (c >= k) {
      R = M;
    } else {
      L = M + 1;
    }
  }

  return L;
};