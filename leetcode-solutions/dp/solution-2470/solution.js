/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarrayLCM = function(nums, k) {
  let dp = new Array(nums.length).fill(null).map(() => new Array(nums.length).fill(0));
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (i === j) {
        dp[i][j] = nums[i];
        if (nums[i] === k) res++;
      } else {
        let a = dp[i - 1][j];
        let b = nums[i];
        if (a > k || b > k) {
          dp[i][j] = k + 1;
        } else {
          dp[i][j] = a * b / gcd(a, b);
          if (dp[i][j] === k) res++;
        }
      }
    }
  }
  return res;

  function gcd(a, b) {
    if (b === 0) return a;
    let c = a % b;
    return b > c ? gcd(b, c) : gcd(c, b);
  }
};
