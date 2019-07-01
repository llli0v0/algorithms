/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let current = 0;
  let steps = 0;
  while (current !== nums.length - 1) {
    let currentBest = 1 + nums[current + 1];
    let bestIndex = current + 1;
    for (let i = 1; i <= nums[current]; i++) {
      if (nums[current] >= nums.length - current - 1) {
        bestIndex = nums.length - 1;
        break;
      }
      if (i + nums[current + i] > currentBest) {
        currentBest = i + nums[current + i];
        bestIndex = current + i;
      }
    }
    current = bestIndex;
    steps++;
  }
  return steps;
};

module.exports = { solution: jump };