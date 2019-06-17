/**
 * 背包问题是经典的NP问题
 * 用动态规划可解
 * N = 背包容量  K = 物体集合
 * K[i][0] 为第 i 个物体的重量 K[i][1] 为第 i 个物体的价值
 * 事件复杂度为 O(N*K.length)
 * @param {number} N
 * @param {number[][]} K 
 * @return {number}
 */
function KnapsackProblem(N, K) {
  let dp = new Array(N + 1).fill(null).map(() => [0, new Set()]);
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < K.length; j++) {
      let k = i - K[j][0];
      if (dp[k] !== undefined && !dp[k][1].has(j) && dp[k][0] + K[j][1] > dp[i][0]) {
        dp[i][0] = dp[k][0] + K[j][1];
        dp[i][1] = new Set(dp[k][1]);
        dp[i][1].add(j);
      }
    }
  }
  let result = 0;
  for (let i = 0; i < dp.length; i++) result = Math.max(result, dp[i][0]);
  return result;
}