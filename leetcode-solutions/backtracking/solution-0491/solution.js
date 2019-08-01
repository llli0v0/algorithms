/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  let result = new Set();

  for (let i = 0; i < nums.length; i++) {
    helper(i + 1, [nums[i]]);
  }

  result = [...result].map(i => i.split(',').map(j => parseInt(j)));

  return result;

  function helper(S, A) {
    if (A.length > 1) result.add(A.join());

    for (let i = S; i < nums.length; i++) {
      if (nums[i] >= A[A.length - 1]) helper(i + 1, A.concat([nums[i]]));
    }
  }
};