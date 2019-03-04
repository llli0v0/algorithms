/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  let subMin = {};
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j >= 0; j--) {
      let currentSub = s.slice(j, i + 1);
      if (isPalindrome(currentSub)) {
        if (j === 0) {
          subMin[i] = 0;
        } else {
          if (subMin[i] === undefined) {
            subMin[i] = subMin[j - 1] + 1;
          } else {
            subMin[i] = Math.min(subMin[i], subMin[j - 1] + 1);
          }
        }
      }
    }
    function isPalindrome(s) {
      for (let i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - i - 1]) return false;
      }
      return true;
    }
  }
  return subMin[s.length - 1];
};

module.exports = { solution: minCut };