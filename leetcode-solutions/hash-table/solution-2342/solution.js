/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
  let map = {};
  let result = -1;
  for (let i = 0; i < nums.length; i++) {
    let s = String(nums[i]);
    let n = 0;
    for (let j = 0; j < s.length; j++) {
      n += parseInt(s[j]);
    }
    if (map[n] === undefined) map[n] = [];
    map[n].push(nums[i]);
    map[n].sort((a, b) => b - a);
    map[n] = map[n].slice(0, 2);
    if (map[n].length === 2) result = Math.max(result, map[n][0] + map[n][1]);
  }
  return result;
};
