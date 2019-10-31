/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
  let result = 0;

  helper(0, 0, 0);

  return result;

  function helper(s, i, n) {
    if (i === arr.length) return result = Math.max(result, s);

    if (arr[i].split('').every(it => ((1 << (it.charCodeAt() - 96)) & n) === 0) && isValue(arr[i])) {
      helper(s + arr[i].length, i + 1, n + sum(arr[i]));
    }

    helper(s, i + 1, n);
  }

  function isValue(s) {
    let c = 0;

    for (let i = 0; i < s.length; i++) {
      if (((1 << (s[i].charCodeAt() - 96)) & c) !== 0) return false;
      c += (1 << (s[i].charCodeAt() - 96));
    }

    return true;
  }

  function sum(s) {
    let r = 0;

    for (let i = 0; i < s.length; i++) r += (1 << s[i].charCodeAt() - 96);

    return r;
  }
};