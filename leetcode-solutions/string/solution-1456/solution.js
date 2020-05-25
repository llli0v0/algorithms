/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
  let queue = [];
  let result = 0;
  let count = 0;
  let vowel = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < s.length; i++) {
    if (queue.length >= k) {
      if (vowel.indexOf(queue.shift()) > -1) count--;
    }
    queue.push(s[i]);
    if (vowel.indexOf(s[i]) > -1) count++;
    result = Math.max(result, count);
  }
  return result;
};