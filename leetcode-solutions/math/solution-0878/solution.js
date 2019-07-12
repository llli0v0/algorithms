/**
 * @param {number} N
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var nthMagicalNumber = function(N, A, B) {
  let M = {};

  let MOD = 10**9 + 7;

  let a = Math.min(A, B);
  let b = Math.max(A, B);

  for (let i = 1; i <= b; i++) {
    M[b * i] = i;
  }

  let c = [];

  for (let i = 1; i <= b; i++) {
    let d = a * i;
    if (M[d]) {
      c = [i, M[d]];
      break;
    }
  }

  let m = Math.floor(N / (c[0] + c[1] - 1));
  let n = N % (c[0] + c[1] - 1);

  let S = m * c[0] % MOD * a % MOD;
  let P = [];
  let Q = [];

  P.push(S + a);
  Q.push(S + b);
  for (let i = 2; i <= c[0]; i++) {
    P.push(P[P.length - 1] + a);
  }
  for (let i = 2; i <= c[1]; i++) {
    Q.push(Q[Q.length - 1] + b);
  }

  let result = S;

  while (n) {
    let r;
    if (P[0] < Q[0]) {
      r = P.shift();
    } else {
      r = Q.shift();
    }
    n--;
    if (n === 0) result = r;
  }

  return result % MOD;
};