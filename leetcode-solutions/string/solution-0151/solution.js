/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let arr = [''];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      if (!arr[0]) continue;
      arr.unshift('');
    } else {
      arr[0] = arr[0] + s[i];
    }
  }
  return arr.join(' ').trim();
};