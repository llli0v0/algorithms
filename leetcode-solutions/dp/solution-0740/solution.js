/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  if (!nums.length) return 0;

  nums = nums.sort((a, b) => a - b);

  let A = [[nums[0], 1]];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === A[A.length - 1][0]) {
      A[A.length - 1][1]++;
    } else {
      A.push([nums[i], 1]);
    }
  }

  let result = 0;

  while (A.length) {
    let a = [A.shift()];
    
    while (A.length && A[0][0] - a[a.length - 1][0] === 1) a.push(A.shift());

    result += helper(a);
  }

  return result;

  function helper(a) {
    let dp = [];
    dp[0] = a[0][0] * a[0][1];
    dp[-1] = 0;

    for (let i = 1; i < a.length; i++) {
      dp[i] = Math.max(a[i][0] * a[i][1] + dp[i - 2], dp[i - 1]);
    }

    return dp[dp.length - 1];
  }
};