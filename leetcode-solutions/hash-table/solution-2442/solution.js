/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
  let set = new Set(nums);
  for (let i = 0; i < nums.length; i++) {
    set.add(parseInt(String(nums[i]).split('').reverse().join('')));
  }
  return set.size;
};
