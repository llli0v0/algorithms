/**
 * @param {number[]} nums
 * @return {boolean}
 */
var splitArray = function(nums) {
  let preSum = [nums[0]];
  let sumMap = { [nums[0]]: [0] };
  for (let i = 1; i < nums.length; i++) {
    let sum;
    preSum.push(sum = preSum[preSum.length - 1] + nums[i]);
    sumMap[sum] = sumMap[sum] ?? [];
    sumMap[sum].push(i);
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    let a = preSum[preSum.length - 1] - preSum[i];
    for (let j = i - 2; j - 1 >= 0; j--) {
      let b = preSum[i - 1] - preSum[j];
      if (a === b && sumMap[a]) {
        let arr = sumMap[a];
        for (let n = 0; n < arr.length; n++) {
          if (arr[n] + 2 > j - 1) break;
          if (preSum[j - 1] - preSum[arr[n] + 1] === a) {
            return true;
          }
        }
      }
    }
  }
  return false;
};
