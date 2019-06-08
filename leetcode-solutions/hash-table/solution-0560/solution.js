/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let hash = {};
  let s = 0;
  for (let i = 0; i < nums.length; i++) {
    s += nums[i];
    hash[i] = s;
  }
  let hash2 = { 0: [-1] };
  for (let key in hash) {
    if (hash2[hash[key]] === undefined) hash2[hash[key]] = [];
    hash2[hash[key]].push(key);
  }
  let result = 0;
  for (let key in hash) {
    if (hash2[hash[key] - k]) {
      let arr = hash2[hash[key] - k];
      for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) < Number(key)) result += 1;
      }
    }
  }
  return result;
};