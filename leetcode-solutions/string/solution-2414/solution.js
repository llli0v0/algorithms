/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function(s) {
  let map = {};
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    let n = s[i].charCodeAt();
    let len = 1;
    for (let j = i - 1; j >= 0; j--) {
      let n1 = s[j].charCodeAt();
      if (n1 - n === -1) {
        len++;
      } else {
        break;
      }
      n = n1;
    }
    res = Math.max(res, len);
  }
  return res;
};
