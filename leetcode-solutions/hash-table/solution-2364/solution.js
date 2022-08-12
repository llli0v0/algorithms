/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function(nums) {
  let map = {};
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    let a = nums[i] - i;
    res += i - (map[a] || 0);
    if (map[a] === undefined) map[a] = 0;
    map[a]++;
  }
  return res;
};
