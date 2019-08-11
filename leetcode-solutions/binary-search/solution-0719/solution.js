/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
  nums = nums.sort((a, b) => a - b);

  let L = 0;
  let R = nums[nums.length - 1] - nums[0];

  while (L < R) {
    let M = Math.floor((L + R) / 2);
    let c = 0;

    for (let i = 1; i < nums.length; i++) {
      for (let j = 0; j < i; j++) {
        if (M >= nums[i] - nums[j]) {
          c += i - j;
          break;
        }
      }
    }

    if (c >= k) {
      R = M;
    } else {
      L = M + 1;
    }
  }

  return L;
};