/**
 * @param {number[][]} mat
 * @return {number}
 */
var minFlips = function(mat) {
  if (mat.every(m => m.every(i => i === 0))) return 0;
  let S = new Set();
  let C = 0;
  let Q = [mat];

  S.add(helper(mat));

  let N = [];

  while (Q.length) {
    let q = Q.shift();

    for (let i = 0; i < q.length; i++) {
      for (let j = 0; j < q[i].length; j++) {
        let a = JSON.parse(JSON.stringify(q));

        a[i][j] = a[i][j] === 1 ? 0 : 1;

        if (a[i - 1]) a[i - 1][j] = a[i - 1][j] === 1 ? 0 : 1;
        if (a[i + 1]) a[i + 1][j] = a[i + 1][j] === 1 ? 0 : 1;
        if (a[i][j - 1] !== undefined) a[i][j - 1] = a[i][j - 1] === 1 ? 0 : 1;
        if (a[i][j + 1] !== undefined) a[i][j + 1] = a[i][j + 1] === 1 ? 0 : 1;

        let k = helper(a);

        if (k === 0) return C + 1;

        if (!S.has(k)) N.push(a);

        S.add(k);
      }
    }

    if (!Q.length) {
      Q = N;
      N = [];
      C++;
    }
  }

  return -1;

  function helper(matrix) {
    let b = 1;
    let r = 0;

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j]) {
          r += 1 << b;
        }
        b++;
      }
    }

    return r;
  }
};