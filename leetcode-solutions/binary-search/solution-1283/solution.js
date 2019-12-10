/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
  let L = 1;
  let R = 10 ** 6;

  while (L < R) {
    let M = Math.floor((L + R) / 2);
    let r = 0;

    for (let i = 0; i < nums.length; i++) {
      r += Math.ceil(nums[i] / M);
    }

    if (r > threshold) {
      L = M + 1;
    } else {
      R = M;
    }
  }

  return L;
};