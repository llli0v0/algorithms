/**
 * @param {number[][]} arr
 * @return {number}
 */
var minFallingPathSum = function(arr) {
  let dp = new Array(arr.length).fill(null).map(() => new Array(arr[0].length).fill(Infinity));
  let M = {};
  let result = Infinity;

  for (let i = 0; i < arr[arr.length - 1].length; i++) {
    result = Math.min(result, arr[arr.length - 1][i] + helper(arr.length - 2, i));
  }

  return result;

  function helper(a, b) {
    if (a < 0) return 0;

    if (dp[a][b] < 10**9) return dp[a][b];

    if (M[a] === undefined) {
      M[a] = [];
      for (let i = 0; i < arr[a].length; i++) M[a].push([arr[a][i] + helper(a - 1, i), i]);
      M[a] = M[a].sort((x, y) => x[0] - y[0]).slice(0, 2);
    }

    dp[a][b] = M[a][0][1] === b ? M[a][1][0] : M[a][0][0];

    return dp[a][b];
  }
};