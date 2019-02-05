/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  let result = [];
  let hashHave = {};
  function hash(arr) {
    let str = ''
    for (let i = 0; i < arr.length; i++) {
      str = str + String(arr[i]);
    }
    return str;
  }
  for (let i = 1; i < nums.length - 1; i++) {
    let left = i - 1, right = i + 1;
    while (left >= 0 && right <= nums.length - 1) {
      let currentSum = nums[left] + nums[i] + nums[right];
      if (currentSum === 0) {
        let arr = [nums[left], nums[i], nums[right]];
        let key = hash(arr);
        if (!hashHave[key]) {
          result.push(arr);
          hashHave[key] = 1;
        }
        left--;
        right++;
      } else if (currentSum > 0) {
        left--;
      } else {
        right++;
      }
    }
    if (nums[left] >=0) return result;
  }
  return result;
};

module.exports = { solution: threeSum };