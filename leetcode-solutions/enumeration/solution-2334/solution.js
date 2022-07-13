/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var validSubarraySize = function(nums, threshold) {
  for (let i = 0; i < nums.length; i++) {
    let left = i;
    let right = i;
    while (left > 0 && nums[left] >= nums[i]) left--;
    if (nums[left] < nums[i]) left++;
    while (right < nums.length && nums[right] >= nums[i]) right++;
    if (nums[right] < nums[i] || right >= nums.length) right--;
    if (nums[i] > threshold / (right - left + 1)) return right - left + 1;
  }
  return -1;
};
