/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function(str1, str2) {
  let dp = new Array(str1.length + 1).fill(null).map(() => new Array(str2.length + 1).fill(0));

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }

  let A = [];
  let L = dp[0].length - 1;
  let C = dp[dp.length - 1][dp[0].length - 1];
  for (let i = dp.length - 1; i > 0; i--) {
    for (let j = dp[i].length - 1; j > 0; j--) {
      if (dp[i][j] > dp[i - 1][j] && dp[i][j] > dp[i][j - 1] && j <= L && dp[i][j] === C) {
        A.unshift([i - 1, j - 1]);
        L = j;
        C--;
        break;
      }
    }
  }

  let result = '';
  for (let i = 0; i < A.length; i++) {
    if (i === 0) {
      result += str1.slice(0, A[i][0]);
      result += str2.slice(0, A[i][1]);
      result += str1[A[i][0]];
    } else {
      result += str1.slice(A[i - 1][0] + 1, A[i][0]);
      result += str2.slice(A[i - 1][1] + 1, A[i][1]);
      result += str1[A[i][0]];
    }
    if (i === A.length - 1) {
      result += str1.slice(A[i][0] + 1);
      result += str2.slice(A[i][1] + 1);
    }
  }

  return result;
};