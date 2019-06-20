/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  let result = false;
  helper(s, 0);
  return result;

  function helper(s, a) {
    let i;
    for (i = 0; i < s.length; i++) {
      if (a > 0) return;
      if (s[i] === '(') {
        a -= 1;
      } else if (s[i] === ')') {
        a += 1;
      } else {
        helper(s.slice(i + 1), a);
        helper(s.slice(i + 1), a + 1);
        helper(s.slice(i + 1), a - 1);
        break;
      }
    }
    if (i === s.length && a === 0) result = true;
  }
};