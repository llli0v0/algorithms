/**
 * @param {string} S
 * @return {number}
 */
var uniqueLetterString = function(S) {
  if (!S) return 0;

  let dp = [1];
  let M = {};
  M[S[0]] = [-1, 0];

  for (let i = 1; i < S.length; i++) {
    dp.push(dp[i - 1]);

    if (M[S[i]]) {
      dp[i] += i - M[S[i]][1] - M[S[i]][1] + M[S[i]][0];
      [M[S[i]][0], M[S[i]][1]] = [M[S[i]][1], i];
    } else {
      dp[i] += i + 1;
      M[S[i]] = [-1, i];
    }
  }

  return dp.reduce((i, j) => (i + j) % 1000000007);
};