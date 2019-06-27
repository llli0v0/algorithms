/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
  let W = [];
  let hash = {};
  let result = 0;
  s = s.split('');
  while (s.length) {
    let a = s.shift();
    W.push(a);
    if (hash[a] === undefined) hash[a] = 0;
    hash[a]++;
    if (Object.keys(hash).length > k) {
      result = result > W.length - 1 ? result : W.length - 1;
      while (true) {
        let b = W.shift();
        hash[b]--;
        if (hash[b] === 0) {
          delete hash[b];
          break;
        }
      }
    }
  }
  result = result > W.length ? result : W.length;
  return result;
};