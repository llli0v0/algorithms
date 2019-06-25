/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {
  let a = [];
  let b = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) a.push(i);
    if (words[i] === word2) b.push(i);
  }
  let result = Infinity;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      result = Math.min(result, Math.abs(a[i] - b[j]));
    }
  }
  return result;
};