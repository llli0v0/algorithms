/**
 * @param {number[]} beans
 * @return {number}
 */
var minimumRemoval = function(beans) {
  beans.sort((a, b) => a - b);
  let sum = beans.reduce((pre, item) => pre + item);
  let preSum = 0;
  let res = sum - beans[0] * beans.length;
  for (let i = 1; i < beans.length; i++) {
    let b = beans[i];
    preSum += b;
    res = Math.min(res, sum - b * (beans.length - i));
  }
  return res;
};
