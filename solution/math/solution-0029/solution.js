/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let result = parseInt(dividend / divisor);
  return result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31) ? Math.pow(2, 31) - 1 : result;
};