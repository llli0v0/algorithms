/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
  let res;
  for (let i = 1; i <= 9; i++) {
    helper(String(i), 1 << i);
  }
  return res;

  function helper(s, used) {
    if (s.length === pattern.length + 1) {
      if (res === undefined) res = s;
      else {
        if (parseInt(s) < parseInt(res)) res = s;
      }
      return;
    }
    for (let i = 1; i <= 9; i++) {
      if (pattern[s.length - 1] === 'I') {
        if (parseInt(s[s.length - 1]) > i) continue;
      } else {
        if (parseInt(s[s.length - 1]) < i) continue;
      }
      if ((used & (1 << i)) === 0) {
        helper(s + String(i), used + (1 << i));
      }
    }
  }
};
