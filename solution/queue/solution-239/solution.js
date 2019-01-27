/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  let queue = [];
  let currentMax;
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    queue.push(nums[i]);
    if (queue.length < k) continue;
    queue.length > k && queue.shift();
    currentMax = Math.max(...queue);
    result.push(currentMax);
  }
  return result;
};

module.exports = { solution: maxSlidingWindow };