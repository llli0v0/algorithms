/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
  let hash = { 0: -1 };
  let C = 0;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] ? 1 : -1;

    let k = C + nums[i];
    
    if (hash[k] !== undefined) {
      result = Math.max(result, i - hash[k]);
    }

    C += nums[i];

    if (hash[C] === undefined) hash[C] = i;
  }

  return result;
};