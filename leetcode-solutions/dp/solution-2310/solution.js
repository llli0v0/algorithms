/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var minimumNumbers = function(num, k) {
  if (!num) return 0;
  else if (num < k) return -1;
  let n = num;
  while ((n - k) % 10 !== 0) n--;
  let dp = {};
  return helper(num) > 3000 ? -1 : helper(num);

  function helper(num) {
    if (num < k) return 0;
    else if ((num - k) % 10 === 0) return 1;
    if (dp[num] !== undefined) return dp[num];
    dp[num] = Infinity;
    for (let i = n; i >= k; i -= 10) {
      if (num - i >= k) {
        dp[num] = Math.min(dp[num], helper(num - i) + 1);
      }
    }
    return dp[num];
  }
};
