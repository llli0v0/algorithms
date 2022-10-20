/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(s) {
  let map = { 0: -1 };
  let str = 'aeiou';
  let counter = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  let kMap = { a: 0, e: 1, i: 2, o: 3, u: 4 };
  let res = 0;
  let key = 0;
  for (let i = 0; i < s.length; i++) {
    if (str.indexOf(s[i]) > -1) {
      counter[s[i]]++;
      if (counter[s[i]] % 2) key += 1 << kMap[s[i]];
      else key -= 1 << kMap[s[i]];
    }
    if (map[key] === undefined) map[key] = i;
    else {
      res = Math.max(res, i - map[key]);
    }
  }
  return res;
};
