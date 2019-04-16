/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums = nums.sort((a, b) => a - b);
  let result = new Set();
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 3; j < nums.length; j++) {
      let sum = target - nums[i] - nums[j];
      let p1 = i + 1, p2 = j - 1;
      while (p2 - p1 > 0) {
        if (nums[p1] + nums[p2] > sum) {
          p2--;
        } else if (nums[p1] + nums[p2] < sum) {
          p1++;
        } else {
          result.add([nums[i], nums[j], nums[p1], nums[p2]].join('_'));
          p1++;
        }
      }
    }
  }
  return [...result].map(i => i.split('_').map(j => parseInt(j)));
};