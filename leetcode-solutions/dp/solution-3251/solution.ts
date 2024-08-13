function countOfPairs(nums: number[]): number {
  if (nums.length === 1) return nums[0] + 1;
  const mod = 10 ** 9 + 7;
  const dp = new Array(nums.length).fill(null).map(() => new Array(1001).fill(0));
  dp[0][0] = 1;
  for (let i = 1; i <= nums[0]; i++) {
    dp[0][i] = 1 + dp[0][i - 1];
  }
  let res = 0;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j <= nums[i]; j++) {
      let a = j;
      let b = nums[i] - j;
      let l = 0;
      let r = nums[i - 1];
      while (l < r) {
        let m = Math.ceil((l + r) / 2);
        if (m <= a && nums[i - 1] - m >= b) {
          l = m;
        } else {
          r = m - 1;
        }
      }
      if (l <= a && nums[i - 1] - l >= b) {
        dp[i][j] = dp[i - 1][l] + (j - 1 >= 0 ? dp[i][j - 1] : 0);
        dp[i][j] %= mod;
        if (i === nums.length - 1) {
          res = dp[i][j];
        }
      }
    }
  }
  return res;
};