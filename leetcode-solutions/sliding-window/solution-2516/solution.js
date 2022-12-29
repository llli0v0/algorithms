/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function(s, k) {
  let counter = [0, 0, 0];
  for (let i = 0; i < s.length; i++) {
    counter[s[i].charCodeAt() - 97]++;
  }
  if (counter.some(i => i < k)) return -1;
  let l = 0;
  let res = s.length;
  for (let i = 0; i < s.length; i++) {
    counter[s[i].charCodeAt() - 97]--;
    while (counter.some(i => i < k)) {
      counter[s[l].charCodeAt() - 97]++;
      l++;
    }
    res = Math.min(res, s.length - (i - l + 1));
  }
  return res;
};
