/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
  let a = [];
  for (let i = 'a'.charCodeAt(); i < 'a'.charCodeAt() + 26; i++) {
    a.push(String.fromCharCode(i));
  }
  let l1 = {};
  let l2 = {};
  let result = new Set();
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (l2[s[i] + a[j]]) result.add(s[i] + a[j] + s[i]);
    }
    for (let key in l1) l2[key + s[i]] = key + s[i];
    l1[s[i]] = s[i];
  }
  return result.size;
};