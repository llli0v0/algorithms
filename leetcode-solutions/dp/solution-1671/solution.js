/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function(nums) {
  let computed = [{0: 0}, {0: 0}];
  let result = nums.length - 3;
  for (let i = 1; i < nums.length; i++) {
    computed[0][i] = 0, computed[1][i] = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        computed[0][i] = Math.max(computed[0][i], 2, computed[0][j] + 1);
      } else if (nums[i] < nums[j] && i > 1) {
        computed[1][i] = Math.max(computed[1][i], computed[0][j] ? computed[0][j] + 1 : -Infinity, computed[1][j] + 1);
        result = Math.min(result, nums.length - computed[1][i]);
      }
    }
  }
  return result;
};
