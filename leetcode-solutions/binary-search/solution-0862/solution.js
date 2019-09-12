/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var shortestSubarray = function(A, K) {
  let S = A[0];
  let MAX = A[0];
  let SUM = [A[0]];

  for (let i = 1; i < A.length; i++) {
    if (S < 0) S = 0;
    S += A[i];
    MAX = Math.max(MAX, S);
    SUM.push(SUM[SUM.length - 1] + A[i]);
  }

  if (MAX < K) return -1;

  let L = 1;
  let R = A.length;

  while (L < R) {
    let M = Math.floor((L + R) / 2);

    MAX = [SUM[M - 1], 0];

    for (let i = 1; i <= A.length - M; i++) {
      if (SUM[i + M - 1] - SUM[i - 1] > MAX[0]) {
        MAX = [SUM[i + M - 1] - SUM[i - 1], i];
      }
    }

    let s = 0;

    let min1 = Infinity;
    let min2 = Infinity;

    for (let i = MAX[1]; i < MAX[1] + M; i++) {
      s += A[i];
      if (s < 0) min1 = Math.min(min1, s);
    }

    s = 0;

    for (let i = MAX[1] + M - 1; i >= MAX[1]; i--) {
      s += A[i];
      if (s < 0) min2 = Math.min(min2, s);
    }

    if (MAX[0] - Math.min(min1, 0) - Math.min(min2, 0) >= K) {
      R = M;
    } else {
      L = M + 1;
    }
  }

  return L;
};