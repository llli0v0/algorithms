/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSumOfThreeSubarrays(nums, k) {
  let foundBest = {};
  for (let i = 1; i <= 3; i++) {
    let current = i * k - 1;
    foundBest[i] === undefined && (foundBest[i] = {});
    while (current < nums.length) {
      if (current === i * k - 1) {
        let res = sum(nums, (i - 1) * k, i * k - 1);
        if (i === 1) {
          foundBest[i][current] = { sum: res, indexs: [0] };
        } else {
          let sub = foundBest[i - 1][current - k];
          foundBest[i][current] = { sum: res + sub.sum, indexs: [...sub.indexs, current - k + 1] };
        }
      } else {
        let res = sum(nums, current - k + 1, current);
        if (i === 1) {
          if (res > foundBest[i][current - 1].sum) {
            foundBest[i][current] = { sum: res, indexs: [current - k + 1] };
          } else {
            foundBest[i][current] = { ...foundBest[i][current - 1] };
          }
        } else {
          let sub = foundBest[i - 1][current - k];
          let res = sum(nums, current - k + 1, current);
          if (res + sub.sum > foundBest[i][current - 1].sum) {
            foundBest[i][current] = { sum: res + sub.sum, indexs: [...sub.indexs, current - k + 1] };
          } else {
            foundBest[i][current] = { ...foundBest[i][current - 1] };
          }
        }
      }
      current++;
    }
  }
  return foundBest[3][nums.length - 1].indexs;
  function sum(nums, start, end) {
    let result = 0;
    for (let i = start; i <= end; i++) {
      result += nums[i];
    }
    return result;
  }
};

module.exports = { solution: maxSumOfThreeSubarrays };