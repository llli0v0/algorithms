/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
  let Trie = {};
  let result = [];
  let cache = new Map();
  class TrieNode {
    constructor() {
      this.isComplete = false;
      this.next = {};
    }
  }
  function buildTrie(words) {
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let current = Trie;
      for (let j = 0; j < word.length; j++) {
        current[word[j]] === undefined && (current[word[j]] = new TrieNode());
        j === word.length - 1 && (current[word[j]].isComplete = true);
        current = current[word[j]].next;
      }
    }
  }
  function checkThisWord(word, index) {
    let current = Trie;
    // if (index === 1398) debugger;
    // This is an interesting bug if I use {} to cache
    cache.has(word) && handleFound();
    for (let i = 0; i < word.length; i++) {
      if (current[word[i]] === undefined || stopCheckThisWord) return;
      if (i === word.length - 1 && current[word[i]].isComplete && word.length < words[index].length) {
        handleFound();
        return;
      }
      if (current[word[i]].isComplete) {
        checkThisWord(word.slice(i + 1), index);
      }
      current = current[word[i]].next;
    }
    function handleFound() {
      result.push(words[index]);
      stopCheckThisWord = true;
      cache.set(words[index], true);
    }
  }
  buildTrie(words);
  let stopCheckThisWord = false;
  for (let i = 0; i < words.length; i++) {
    stopCheckThisWord = false;
    checkThisWord(words[i], i);
  }
  return result;
};

module.exports = { solution: findAllConcatenatedWordsInADict };