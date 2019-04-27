/**
 * @param {string[]} D
 * @param {number} N
 * @return {number}
 */
var atMostNGivenDigitSet = function(D, N) {
  let result = 0;
  N = String(N);
  // Result + the number of digits that are less than N
  // 首先统计所有位数小于N的数量
  for (let i = 1; i < N.length; i++) {
    result += Math.pow(D.length, i);
  }
  // If the number of elements result+ that are equal to N[I] in D is less than N.slice (I),
  // note that 0 does not exist in D
  // 然后如果D中存在和N[i]相等的元素统计，位数和N.slice(i)相等！(因为D中不存在0)并且小于等于N.slice(i)的数量
  for (let i = 0; i < N.length; i++) {
    let c = lessCount(N[i], i === N.length - 1 ? true : false);
    result += c * Math.pow(D.length, N.length - i - 1);
    if (!D.some(t => t === N[i])) break;
  }
  return result;
  function lessCount(target, last) {
    let ans = 0;
    for (let i = 0; i < D.length; i++) {
      if (last) {
        if (D[i] <= target) ans++;
      } else {
        if (D[i] < target) ans++;
      }
    }
    return ans;
  }
};