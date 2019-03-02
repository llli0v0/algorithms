/**
 * nums = [1, 5, 10], n = 20
 * 
 * now: [1, 5, 6, 10, 11, 15, 16], lack: [2, 3, 4, 7, 8, 9, 12, 13, 14, 17, 18, 19, 20]
 * min lack: 2
 * 2 √ -> nums = [1, 2, 5, 10]
 * 
 * now: [1, 2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 15, 16, 17, 18], lack: [4, 9, 14, 19, 20]
 * min lack: 4
 * 4 √ -> nums = [1, 2, 4, 5, 10]
 * 
 * now: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], lack: []
 * 
 * result = [2, 4] √
 * 
 * nums = [3, 6, 11], n = 30
 * 
 * now: [3, 6, 9, 11, 14, 17, 20], lack: [1, 2, 4, 5, 7, 8, 10, 12, 13, 15, 16, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
 * min lack: 1
 * 1 √ -> nums = [1, 3, 6, 11]
 * 
 * now: [1, 3, 4, 6, 7, 9, 10, 11, 12, 14, 15, 17, 18, 20, 21], lack: [2, 5, 8, 13, 16, 19, 22, 23, 24, 25, 26, 27, 29, 30]
 * min lack: 2
 * 2 √ -> nums = [1, 2, 3, 6, 11]
 * 
 * now: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], lack: [24, 25, 26, 27, 28, 29, 30]
 * min lack: 24? -> 7
 * 7 √ -> nums = [1, 2, 3, 6, 7, 11]
 * 
 * now: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], lack: []
 * 
 * result = [1, 2, 7] √
 */

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
  let result = 0;
  while (nums[nums.length - 1] > n) {
    nums.pop();
  }
  if (!nums.length || nums[0] !== 1) {
    nums.unshift(1);
    result++;
  }
  nums.unshift(0);
  let current = 1;
  let currentMax = 0;
  while (current < nums.length) {
    if (nums[current] - currentMax > 1 && nums[current - 1]) {
      result++;
      currentMax = currentMax * 2 + 1;
    } else {
      currentMax += nums[current];
      current++;
    }
  }
  while (currentMax < n) {
    nums.push(currentMax * 2 + 1);
    currentMax = nums[nums.length - 1];
    result++;
  }
  return result;
};