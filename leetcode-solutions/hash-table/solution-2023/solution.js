/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
var numOfPairs = function(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) map[nums[i]] = 0;
    map[nums[i]]++;
  }
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    let a = nums[i];
    if (target.slice(0, a.length) !== a) continue;
    let b = target.slice(a.length);
    if (map[b] !== undefined) {
      if (a === b) {
        result += map[b] - 1;
      } else {
        result += map[b];
      }
    }
  }
  return result;
};