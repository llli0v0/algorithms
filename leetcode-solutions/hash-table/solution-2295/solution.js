/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function(nums, operations) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }
  for (let i = 0; i < operations.length; i++) {
    let [a, b] = operations[i];
    map[b] = map[a];
    nums[map[a]] = b;
  }
  return nums;
};
