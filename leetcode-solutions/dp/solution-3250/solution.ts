function countOfPairs(nums: number[]): number {
  if (nums.length === 1) return nums[0] + 1;
  const mod = 10 ** 9 + 7;
  const dp = new Array(nums.length).fill(null).map(() => new Array(51).fill(null).map(() => new Array(51).fill(0)));
  for (let i = 0; i <= nums[0]; i++) {
    dp[0][i][nums[0] - i] = 1;
  }
  let res = 0;
  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];
    for (let j = 0; j <= num; j++) {
      let a = j;
      let b = num - j;
      for (let n = 0; n <= a; n++) {
        let m = nums[i - 1] - n;
        if (m < b) continue;
        dp[i][a][b] = (dp[i][a][b] + dp[i - 1][n][m]) % mod;
      }
      if (i === nums.length - 1) {
        res += dp[i][a][b];
        res %= mod;
      }
    }
  }
  return res;
};
