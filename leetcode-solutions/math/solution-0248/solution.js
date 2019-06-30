/**
 * @param {string} low
 * @param {string} high
 * @return {number}
 */
var strobogrammaticInRange = function(low, high) {
  if (low.length > high.length) return 0;
  let result = 0;
  let S = new Set();
  let a = findStrobogrammatic(low.length);
  let L = high.length - low.length;
  let lowLen = low.length;
  let highLen = high.length;
  let s = new Array(L).fill(0).join('');
  low = s + low;
  for (let i = 0; i < a.length; i++) {
    a[i] = s + a[i];
    if (a[i] >= low && a[i] <= high) S.add(a[i]);
  }
  for (let i = lowLen + 1; i < highLen; i++) {
    result += findStrobogrammatic(i).length;
  }
  let b = findStrobogrammatic(highLen);
  for (let i = 0; i < b.length; i++) {
    if (b[i] >= low && b[i] <= high) S.add(b[i]);
  }
  return result + S.size;

  function findStrobogrammatic(n) {
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
  }
};