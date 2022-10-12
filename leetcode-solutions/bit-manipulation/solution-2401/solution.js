/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {
  let arr = [];
  let sum = 0;
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    let item = nums[i];
    while ((item & sum) !== 0) {
      sum -= arr.shift();
    }
    arr.push(nums[i]);
    sum += nums[i];
    res = Math.max(res, arr.length);
  }
  return res;
};
