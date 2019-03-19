/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let results = new Set();
  let len = nums.length;
  handle(nums, '', 0);
  return [...results].map(i => i.split('_').map(j => parseInt(j)));
  function handle(nums, result, p) {
    for (let i = 0; i < nums.length; i++) {
      if (p === len - 1) {
        result = result + '_' + nums[i];
        return results.add(result.slice(1));
      }
      handle(nums.slice(0, i).concat(nums.slice(i + 1)), result + '_' + nums[i], p + 1);
    }
  }
};