/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
  for (let i = 0; i < nums.length; i++) nums[i] = [nums[i], i];

  let result = new Array(nums.length).fill(0);

  helper(nums);

  return result;

  function helper(nums) {
    if (!nums.length || nums.length === 1) return nums;

    let M = Math.floor(nums.length / 2);

    let L = helper(nums.slice(0, M));
    let R = helper(nums.slice(M));

    let sorted = [];

    while (L.length && R.length) {
      if (R[0][0] >= L[0][0]) {
        sorted.push(R.shift());
      } else {
        result[L[0][1]] += R.length;
        sorted.push(L.shift());
      }
    }

    sorted = sorted.concat(L.length ? L : R);

    return sorted;
  }
};