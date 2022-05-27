/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function(candies, k) {
  let max = candies.reduce((pre, cur) => Math.max(pre, cur));
  let l = 0;
  let r = max;
  while (l < r) {
    let m = Math.ceil((l + r) / 2);
    let cur = k;
    for (let i = 0; i < candies.length; i++) {
      cur -= Math.floor(candies[i] / m);
    }
    if (cur > 0) {
      r = m - 1;
    } else {
      l = m;
    }
  }
  return l;
};