/**
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var makeIntegerBeautiful = function(n, target) {
  arr = [0].concat(String(n).split('').map(item => parseInt(item)));
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr.reduce((pre, cur) => pre + cur) > target || arr[i] === 10) {
      arr[i] = 0;
      arr[i - 1] += 1;
    } else {
      return parseInt(arr.join('')) - n;
    }
  }
  return parseInt(arr.join('')) - n;
};
