/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimalKSum = function(nums, k) {
  nums = [...new Set(nums)];
  nums.sort((a, b) => a - b);
  nums.push(10 ** 9 + 1);
  let preSum = 0;
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    if (n > i + k) {
      return (1 + i + k) * (i + k) / 2 - preSum;
    }
    preSum += n;
  }
};
