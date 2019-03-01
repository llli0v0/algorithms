/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  x = String(x);
  if (x[0] === '-') {
    return false;
  }
  let right = Math.ceil(x.length / 2);
  let left = Math.floor(x.length / 2) - 1;
  while (left >= 0) {
    if (x[left] !== x[right]) return false;
    left--;
    right++;
  }
  return true;
};