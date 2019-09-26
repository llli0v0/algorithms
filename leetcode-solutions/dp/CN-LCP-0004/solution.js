/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} broken
 * @return {number}
 */
var domino = function(n, m, broken) {
  let mod = 10 ** 9 + 7;
  let matrix = new Array(n).fill(null).map(() => new Array(m).fill(null));

  for (let i = 0; i < broken.length; i++) matrix[broken[i][0]][broken[i][1]] = '*';

  let dp = {};

  return helper(matrix);

  function helper(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === null) {
          let key = getKey(matrix, i, j);

          if (dp[key] !== undefined) return dp[key];

          dp[key] = 0;

          let t = matrix[i - 1] && matrix[i - 1][j];
          let d = matrix[i + 1] && matrix[i + 1][j];
          let l = matrix[i][j - 1];
          let r = matrix[i][j + 1];
          
          let a = JSON.parse(JSON.stringify(matrix));
          a[i][j] = 0;

          if (t !== 0 && d !== 0 && l !== 0 && r !== 0) dp[key] = Math.max(dp[key], helper(a));

          if (d === null) {
            let b = JSON.parse(JSON.stringify(matrix));
            b[i + 1][j] = 1;
            b[i][j] = 1;

            dp[key] = Math.max(dp[key], 1 + helper(b));
          }

          if (r === null) {
            let c = JSON.parse(JSON.stringify(matrix));
            c[i][j + 1] = 1;
            c[i][j] = 1;

            dp[key] = Math.max(dp[key], 1 + helper(c));
          }

          return dp[key];
        }
      }
    }

    return 0;
  }

  function getKey(matrix, a, b) {
    let k = 0;

    for (let i = a; i < matrix.length; i++) {
      for (let j = i === a ? b : 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === null) {
          k += (2 ** ((i + 1) * m + j + 1)) % mod;
        }
      }
    }

    return k % mod;
  }
};