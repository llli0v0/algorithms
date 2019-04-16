/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let p1 = 0, p2 = 0;
  let current = nums[0];
  let result = Infinity;
  while (p2 < nums.length) {
    while (current < s && p2 < nums.length - 1) {
      p2++;
      current += nums[p2];
    }
    while (current - nums[p1] >= s && p1 <= p2) {
      current -= nums[p1];
      p1++;
    }
    result = p2 - p1 + 1 < result ? p2 - p1 + 1 : result;
    p2++;
    if (p2 < nums.length) {
      current += nums[p2];
    }
  }
  if (current === undefined || current < s) return 0;
  return result;
};

minSubArrayLen(7, [2,3,1,2,4,3]);