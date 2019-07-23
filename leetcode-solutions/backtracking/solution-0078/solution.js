/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let result = [];

  helper(nums, []);

  return result;

  function helper(nums, N) {
    if (!nums.length) return result.push(N);

    helper(nums.slice(1), N.concat([nums[0]]));
    helper(nums.slice(1), N);
  }
};