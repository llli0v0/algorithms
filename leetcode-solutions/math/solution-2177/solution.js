/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function(num) {
  let n = num / 3;
  if (n % 1) return [];
  return [n - 1, n, n + 1];
};
