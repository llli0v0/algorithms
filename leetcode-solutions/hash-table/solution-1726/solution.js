/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let key = nums[i] * nums[j];
      if (hash[key] === undefined) hash[key] = 0;
      hash[key]++;
    }
  }
  let result = 0;
  for (let key in hash) {
    result += hash[key] * (hash[key] - 1) / 2;
  }
  return result * 8;
};