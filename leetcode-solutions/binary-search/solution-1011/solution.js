/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
  let L = Math.max(...weights);
  let R = weights.reduce((a, b) => a + b);

  while (L < R) {
    let M = Math.floor((L + R) / 2);
    
    let n = helper(M);

    if (n <= D) {
      R = M;
    } else {
      L = M + 1;
    }
  }

  return L;

  function helper(M) {
    let s = 0;
    let n = 1;

    for (let i = 0; i < weights.length; i++) {
      s += weights[i];
      if (s > M) {
        s = weights[i];
        n++;
      }
    }

    return n;
  }
};