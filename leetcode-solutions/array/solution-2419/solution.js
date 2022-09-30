/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
  let map = { [nums[0]]: 1 };
  let val = nums[0];
  let cur = nums[0], len = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === cur) {
      len++;
    } else {
      map[nums[i - 1]] = Math.max(map[nums[i - 1]] ?? 0, len);
      cur = nums[i];
      len = 1;
    }
    val = Math.max(val, nums[i]);
  }
  map[cur] = Math.max(map[cur] ?? 0, len);
  return map[val];
};
