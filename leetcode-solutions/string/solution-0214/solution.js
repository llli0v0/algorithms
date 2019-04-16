/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
  function reverseWord(word) {
    let res = '';
    for (let i = word.length - 1; i >= 0; i--) {
      res += word[i];
    }
    return res;
  }
  let reWrod = reverseWord(s);
  let p;
  for (let i = 0; i < s.length; i++) {
    if (reWrod.slice(i) === s.slice(0, s.length - i)) {
      p = i;
      break;
    }
  }
  return reWrod.slice(0, p) + s;
};

module.exports = { solution: shortestPalindrome };