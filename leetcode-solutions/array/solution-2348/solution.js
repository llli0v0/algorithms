/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
  let count = 0;
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) count++;
    else {
      res += (1 + count) * count / 2;
      count = 0;
    }
  }
  res += (1 + count) * count / 2;
  return res;
};
