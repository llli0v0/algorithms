/**
 * @param {number[]} nums
 * @param {number[]} numsDivide
 * @return {number}
 */
var minOperations = function(nums, numsDivide) {
  let old = nums.sort((a, b) => a - b);
  nums = Array.from(new Set(nums)).sort((a, b) => a - b);
  numsDivide = Array.from(new Set(numsDivide)).sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    let f = true;
    for (let j = 0; j < numsDivide.length; j++) {
      if (numsDivide[j] % n) {
        f = false;
        break;
      }
    }
    if (f) {
      for (let j = 0; j < old.length; j++) {
        if (old[j] === n) return j;
      }
    }
  }
  return -1;
};
