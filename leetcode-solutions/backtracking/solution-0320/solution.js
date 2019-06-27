/**
 * @param {string} word
 * @return {string[]}
 */
var generateAbbreviations = function(word) {
  let result = new Set();
  helper(word, '');
  return [...result];

  function helper(s, q) {
    if (!s) result.add(q);
    for (let i = 0; i < s.length; i++) {
      if (Number.isNaN(Number(q[q.length - 1]))) {
        helper(s.slice(i + 1), q + (i + 1));
      }
      helper(s.slice(i + 1), q + s.slice(0, i + 1));
    }
  }
};