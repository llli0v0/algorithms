/**
 * @param {number[]} rungs
 * @param {number} dist
 * @return {number}
 */
var addRungs = function(rungs, dist) {
  rungs.unshift(0);
  let result = 0;
  for (let i = 1; i < rungs.length; i++) {
    if (rungs[i] - rungs[i - 1] > dist) {
      result += Math.ceil((rungs[i] - rungs[i - 1]) / dist) - 1;
    }
  }
  return result;
};