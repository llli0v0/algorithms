/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {number}
 */
var minOperations = function(target, arr) {
  let targetMap = {};
  for (let i = 0; i < target.length; i++) targetMap[target[i]] = i;
  let muddled = [];
  for (let i = 0; i < arr.length; i++) {
    if (targetMap[arr[i]] !== undefined) muddled.push(targetMap[arr[i]]);
  }
  let LIS = [];
  for (let i = 0; i < muddled.length; i++) {
    if (LIS.length === 0) {
      LIS.push(muddled[i]);
    } else if (muddled[i] > LIS[LIS.length - 1]) {
      LIS.push(muddled[i]);
    } else {
      let l = 0;
      let r = LIS.length - 1;
      while (l < r) {
        let m = Math.floor((l + r) / 2);
        if (muddled[i] > LIS[m]) {
          l = m + 1;
        } else {
          r = m;
        }
      }
      LIS.splice(l, 1, muddled[i]);
    }
  }
  return target.length - LIS.length;
};