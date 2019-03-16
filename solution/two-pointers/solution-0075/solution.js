/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let p1 = 0, p2 = nums.length - 1;
  while (nums[p1] === 0) p1++;
  while (nums[p2] === 2) p2--;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 2 && p2 >= 0 && p2 > i) {
      [nums[i], nums[p2]] = [nums[p2], nums[i]];
      while (nums[p2] === 2) p2--;
      if (nums[p1] === 0) p1++;
    }
    if (nums[i] === 0 && p1 < nums.length && p1 < i) {
      [nums[i], nums[p1]] = [nums[p1], nums[i]];
      while (nums[p1] === 0) p1++;
      if (nums[p2] === 2) p2--;
    }
    if (i === p2) break;
  }
};

console.log(sortColors([0,0,2,1,1,2,1,1,1,0,2,1,0,1,2,1,0,1,1,1,2,2,1,2,0,0,1,0,2,1,2,2,2,0]));