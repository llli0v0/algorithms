function maxProfit(k: number, prices: number[]): number {
  let dp = new Array(prices.length).fill(null).map(() => new Array(k + 1).fill(-Infinity));
  return solve(prices.length - 1, k);

  function solve(idx: number, k: number): number {
    if (idx <= 0 || k === 0) return 0;
    if (isFinite(dp[idx][k])) return dp[idx][k];
    dp[idx][k] = solve(idx - 1, k);
    for (let i = idx - 1; i >= 0; i--) {
      dp[idx][k] = Math.max(dp[idx][k], prices[idx] - prices[i] + solve(i - 1, k - 1));
    }
    return dp[idx][k];
  }
};