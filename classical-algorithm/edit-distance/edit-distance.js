/**
 *     h o r s e
 *   0 1 2 3 4 5
 * r 1 1 2 2 3 4
 * o 2 2 1 2 3 4
 * s 3 3 2 2 2 3
 * 
 * 编辑距离是经典的动态规划问题
 * 常用来衡量两个字符串的相似度
 */

function EditDistance(A, B) {
  let dp = new Array(A.length + 1).fill(null).map(() => new Array(B.length + 1).fill(0));

  for (let i = 0; i < dp.length; i++) dp[i][0] = i;
  for (let i = 0; i < dp[0].length; i++) dp[0][i] = i;

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + (A[i - 1] === B[j - 1] ? 0 : 1));
    }
  }
  
  return dp[dp.length - 1][dp[0].length - 1];
}