/**
 * @param {string} word
 * @return {number}
 */
var longestBeautifulSubstring = function(word) {
  word += 'a';
  let tail = '';
  let len = 0;
  let result = 0;
  let map = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  for (let i = 0; i < word.length; i++) {
    if (len === 0 && word[i] !== 'a') continue;
    else if (len === 0 && word[i] === 'a') {
      tail = word[i];
      len = 1;
    } else if (map[word[i]] - map[tail] <= 1 && map[word[i]] - map[tail] > -1) {
      tail = word[i];
      len++;
    } else if (word[i] < tail || map[word[i]] - map[tail] > 1) {
      if (tail === 'u') result = Math.max(result, len);
      if (word[i] === 'a') tail = 'a', len = 1;
      else tail = '', len = 0;
    }
  }
  return result;
};
