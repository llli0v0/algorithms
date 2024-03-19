function sumOfPower(nums: number[], k: number): number {
  const mod = 10 ** 9 + 7;
  const presum: number[] = [nums[0]];
  const pows: number[] = [2];
  for (let i = 1; i < nums.length; i++) {
    presum.push(presum[presum.length - 1] + nums[i]);
    pows.push(pows[pows.length - 1] * 2 % mod);
  }
  const dp: (number | null)[][] = new Array(nums.length).fill(null).map(() => new Array(k + 1).fill(null));
  return solve(nums.length - 1, k);

  function solve(idx: number, n: number): number {
    console.log(idx, n);
    if (n === 0) return pows[idx];
    else if (n < 0) return 0;
    else if (idx < 0) return 0;
    else if (presum[idx] < n) return 0;
    else if (presum[idx] === n) return 1;
    else if (dp[idx][n] !== null) return dp[idx][n]!;
    dp[idx][n] = solve(idx - 1, n - nums[idx]) + 2 * solve(idx - 1, n);
    dp[idx][n]! %= mod;
    return dp[idx][n]!;
  }
};