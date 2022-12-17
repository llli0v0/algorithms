/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function(nums) {
  nums.sort((a, b) => a - b);
  let map = {};
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    let m = nums[i];
    let n = Math.sqrt(m);
    if (map[n]) {
      map[m] = map[n] + 1;
    } else {
      map[m] = 1;
    }
    res = Math.max(res, map[m]);
  }
  return res > 1 ? res : -1;
};
