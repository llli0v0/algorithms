/**
 * @param {number} n
 * @return {number}
 */
var newInteger = function(n) {
  let M = { 1: 0 };
  for (let i = 1; i < 10; i++) {
    M[10**i] = M[10**(i - 1)] * 9 + 10**(i - 1);
  }
  for (let k in M) {
    M[k] = k - M[k];
  }
  let result = 0;
  let K = Object.keys(M).map((i) => parseInt(i)).sort((a, b) => b - a);
  while (n) {
    for (let i = 0; i < K.length; i++) {
      let k = K[i];
      if (n % M[k] !== n) {
        let a = Math.floor(n / M[k]);
        result += a * k;
        n -= M[k] * a;
        break;
      }
    }
  }
  return result;
};