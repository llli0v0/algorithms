/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  let result = [];
  for (let i = 0; i < s.length; i++) {
    if (is(s.slice(0, i + 1))) {
      helper(s.slice(i + 1), s.slice(0, i + 1) + ' ');
    }
  }
  return result;
  function helper(s, str) {
    if (!s) {
      let res = str.split(' ');
      res.pop();
      result.push(res);
    }
    for (let i = 0; i < s.length; i++) {
      if (is(s.slice(0, i + 1))) {
        helper(s.slice(i + 1), str + s.slice(0, i + 1) + ' ');
      }
    }
  }
  function is(str) {
    let l = Math.floor(str.length / 2);
    for (let i = 0; i < l; i++) {
      if (str[i] !== str[str.length - i - 1]) return false;
    }
    return true;
  }
};