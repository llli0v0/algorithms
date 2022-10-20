/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function(arr) {
  let res = -Infinity;
  let preMap = {};
  let preSum = 0;
  let min = 0;
  for (let i = 0; i < arr.length; i++) {
    preSum += arr[i];
    preMap[i] = preSum - min;
    min = Math.min(min, preSum);
    res = Math.max(res, preMap[i]);
  }
  let tailMap = {};
  let tailSum = 0;
  min = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    tailSum += arr[i];
    tailMap[i] = tailSum - min;
    min = Math.min(min, tailSum);
    res = Math.max(res, tailMap[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    if (i - 1 >= 0 && i + 1 < arr.length) {
      res = Math.max(res, preMap[i - 1] + tailMap[i + 1]);
    }
  }
  return res;
};
