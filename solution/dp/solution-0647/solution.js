/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let rmap = {};
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    rmap[i] = {};
    rmap[i][i] = true;
    if (i > 0 && s[i - 1] === s[i]) rmap[i][i - 1] = true;
    for (let j = i - 2; j >= 0; j--) {
      if (s[i] === s[j] && rmap[i - 1][j + 1]) {
        rmap[i][j] = true;
      }
    }
  }
  for (let key in rmap) {
    result += Object.keys(rmap[key]).length;
  }
  return result;
};