/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumReplacement = function(nums) {
  let res = 0;
  let num = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    let cur = nums[i];
    let l = 0;
    let r = cur;
    while (l < r) {
      let m = Math.floor((l + r) / 2);
      if (cur / (m + 1) > num) {
        l = m + 1;
      } else {
        r = m;
      }
    }
    res += l;
    num = Math.floor(cur / (l + 1));
  }
  return res;
};
