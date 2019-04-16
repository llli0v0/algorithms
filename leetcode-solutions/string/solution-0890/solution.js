/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    check(words[i]);
  }
  return result;
  function check(word) {
    if (word.length !== pattern.length) return;
    let tmap = {};
    let wset = new Set();
    let pset = new Set();
    for (let i = 0; i < word.length; i++) {
      wset.add(word[i]);
      pset.add(pattern[i]);
      if (pattern[i] === word[i]) {
        tmap[pattern[i]] = word[i];
        continue;
      }
      if (tmap[pattern[i]] && tmap[pattern[i]] !== word[i]) return;
      tmap[pattern[i]] = word[i];
    }
    if (wset.size === pset.size) result.push(word);
  }
};