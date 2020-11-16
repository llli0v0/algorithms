/**
 * @param {number[]} nums
 * @param {number[]} quantity
 * @return {boolean}
 */
var canDistribute = function(nums, quantity) {
  let numsMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (numsMap[nums[i]] === undefined) numsMap[nums[i]] = 1;
    else numsMap[nums[i]]++;
  }
  nums = [];
  for (let key in numsMap) nums.push(numsMap[key]);
  nums = nums.sort((a, b) => b - a).slice(0, quantity.length);
  let computed = {};
  return helper(quantity.length - 1, 2**quantity.length - 1);

  function helper(numsIdx, curCase) {
    if (numsIdx >= -1 && curCase === 0) return true;
    else if (numsIdx < 0) return false;
    let key = `${numsIdx} ${curCase}`;
    if (computed[key] !== undefined) return computed[key];
    computed[key] = helper(numsIdx - 1, curCase);
    for (let i = 0; i <= curCase; i++) {
      if ((i & curCase) === i) {
        let count = 0;
        for (let j = 0; j < quantity.length; j++) {
          if ((2**j & i) === 2**j) {
            count += quantity[j];
          }
        }
        if (nums[numsIdx] >= count) {
          if (helper(numsIdx - 1, curCase - i)) {
            return computed[key] = true;
          }
        }
      }
    }
    return computed[key];
  }
};