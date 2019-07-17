/**
 * @param {number} a
 * @return {number}
 */
var smallestFactorization = function(a) {
  if (a === 1) return 1;

  let A = [];

  let M = Infinity;

  helper(a, []);

  A.sort((a, b) => {
    for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i]) return 1;
      if (a[i] < b[i]) return -1;
    }
    return 0;
  });

  if (!A.length) return 0;

  let result = Number(A[0].join(''));
  return result > 2**31 ? 0 : result;

  function helper(m, n) {
    if (n.length + 1 > M) return;

    for (let i = 2; i < 10; i++) {
      if (m / i === 1) {
        if (n.length + 1 < M) {
          A = [];
          M = n.length + 1;
        }
        A.push(n.concat([i]));
        return;
      }
      if (m % i === 0) {
        helper(m / i, n.concat([i]));
      }
    }
  }
};