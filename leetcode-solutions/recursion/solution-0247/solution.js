/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function(n) {
  let result = [];
  if (n % 2) {
    helper('1', n - 1);
    helper('8', n - 1);
    helper('0', n - 1);
  } else {
    helper('', n);
  }
  return result;

  function helper(s, n) {
    if (n === 0) return result.push(s);
    helper('1' + s + '1', n - 2);
    helper('8' + s + '8', n - 2);
    helper('9' + s + '6', n - 2);
    helper('6' + s + '9', n - 2);
    if (n > 2) helper('0' + s + '0', n - 2);
  }
};