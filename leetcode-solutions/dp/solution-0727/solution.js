/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var minWindow = function(S, T) {
  let dp = new Array(T.length).fill(null).map(() => new Array(S.length).fill(null));
  if (S[0] === T[0]) dp[0][0] = [0, 0];
  for (let i = 1; i < dp[0].length; i++) {
    if (S[i] === T[0]) {
      dp[0][i] = [i, i];
    } else {
      dp[0][i] = dp[0][i - 1];
    }
  }
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      if (T[i] === S[j] && dp[i - 1][j - 1]) {
        dp[i][j] = [dp[i - 1][j - 1][0], j];
      } else {
        dp[i][j] = dp[i][j - 1];
      }
    }
  }
  let result = {};
  let D = dp[dp.length - 1];
  for (let i = 0; i < D.length; i++) {
    if (!D[i]) continue;
    let k = D[i][1] - D[i][0];
    if (result[k] === undefined) result[k] = D[i];
  }
  let a = 2**31;
  let b;
  for (let k in result) {
    if (Number(k) < Number(a)) {
      a = k;
      b = result[k];
    }
  }
  return b ? S.slice(b[0], b[1] + 1) : '';
};