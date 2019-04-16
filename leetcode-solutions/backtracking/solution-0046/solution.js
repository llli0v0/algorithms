/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let results = [];
  let len = nums.length;
  handle(nums, '', 0);
  return results;
  function handle(nums, result, p) {
    for (let i = 0; i < nums.length; i++) {
      if (p === len - 1) {
        result = result + '_' + nums[i];
        return results.push(result.slice(1).split('_').map(i => parseInt(i)));
      }
      handle(nums.slice(0, i).concat(nums.slice(i + 1)), result + '_' + nums[i], p + 1);
    }
  }
};