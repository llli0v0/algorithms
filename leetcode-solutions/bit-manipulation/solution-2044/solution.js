/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
  let max = 0;
  let count = 0;
  for (let i = 1; i < 2 ** nums.length; i++) {
    let r = 0;
    for (let j = 0; j < nums.length; j++) {
      if (((1 << j) & i) === (1 << j)) {
        r = r | nums[j];
      }
    }
    if (r === max) count++;
    else if (r > max) {
      max = r;
      count = 1;
    }
  }
  return count;
};