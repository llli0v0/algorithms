/**
 * @param {string[]} board
 * @return {number[]}
 */
var pathsWithMaxScore = function(board) {
  let dp = new Array(board.length).fill(null).map(() => new Array(board[0].length).fill(null));
  let mod = 10 ** 9 + 7;
  
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < dp[i].length; j++) dp[i][j] = board[i][j];
  }

  dp[0][0] = '0';
  dp[board.length - 1][board[0].length - 1] = [0, 1];

  for (let i = dp.length - 1; i >= 0; i--) {
    for (let j = dp[0].length - 1; j >= 0; j--) {
      if (i === dp.length - 1 && j === dp[0].length - 1) continue;

      if (dp[i][j] === 'X') {
        dp[i][j] = [0, 0];
        continue;
      }

      dp[i][j] = [parseInt(dp[i][j]), 0];

      let A = [];

      if (dp[i + 1]) A.push(dp[i + 1][j]);
      if (dp[i + 1] && dp[i + 1][j + 1] !== undefined) A.push(dp[i + 1][j + 1]);
      if (dp[i][j + 1] !== undefined) A.push(dp[i][j + 1]);

      let M = -Infinity;
      let B = [];

      for (let n = 0; n < A.length; n++) {
        if (A[n][0] > M) {
          M = A[n][0];
          B = [];
        }
        if (A[n][0] === M) B.push(A[n]);
      }

      if (B.some(item => item[1] > 0)) dp[i][j][0] += B[0][0];

      for (let n = 0; n < B.length; n++) {
        dp[i][j][1] += B[n][1];
        dp[i][j][1] %= mod;
      }
    }
  }

  return dp[0][0];
};