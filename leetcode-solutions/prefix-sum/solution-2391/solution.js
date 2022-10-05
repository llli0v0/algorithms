/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
  let res = 0;
  let preSum = [];
  let tail = { M: 0, P: 0, G: 0 };
  for (let i = 0; i < garbage.length; i++) {
    let g = garbage[i];
    if (i < travel.length) {
      preSum.push((preSum[i - 1] ?? 0) + travel[i]);
    }
    res += g.length;
    if (g.indexOf('M') > -1) tail.M = i;
    if (g.indexOf('P') > -1) tail.P = i;
    if (g.indexOf('G') > -1) tail.G = i;
  }
  res += preSum[tail.M - 1] ?? 0;
  res += preSum[tail.P - 1] ?? 0;
  res += preSum[tail.G - 1] ?? 0;
  return res;
};
