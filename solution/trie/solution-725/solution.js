/**
 * @param {string[]} words
 */
var WordFilter = function(words) {
  class TrieNode {
    constructor(word, index) {
      this.word = word;
      index === undefined && (this.index = null);
      index !== undefined && (this.index = index);
      this.isCompleteWord = false;
      this.next = {};
    }
  }
  WordFilter.Trie = {};
  WordFilter.source = words;
  for (let i = 0; i < words.length; i++) {
    let current = WordFilter.Trie;
    let word = words[i];
    for (let j = 0; j < word.length; j++) {
      let w = word[j];
      if (current[w] !== undefined) {
        if (j === word.length - 1) {
          current[w].isCompleteWord = true
          current[w].index = i;
        }
      } else {
        if (j === word.length - 1) {
          current[w] = new TrieNode(w, i);
          current[w].isCompleteWord = true;
        } else {
          current[w] = new TrieNode(w);
        }
      }
      current = current[w].next;
    }
  }
  return WordFilter.Trie;
};

/** 
 * @param {string} prefix 
 * @param {string} suffix
 * @return {number}
 */
WordFilter.prototype.f = function(prefix, suffix) {
  if (prefix === '' && suffix === '') return WordFilter.source.length - 1;
  let current = WordFilter.Trie;
  let indexs = [];
  let result;
  for (let i = 0; i < prefix.length || prefix === ''; i++) {
    if (current[prefix[i]] === undefined && prefix !== '') {
      return -1;
    } else {
      if (i === prefix.length - 1 || prefix === '') {
        if (prefix !== '' && current[prefix[i]].isCompleteWord) indexs.push(current[prefix[i]].index);
        findAllString(prefix === '' ? WordFilter.Trie : current[prefix[i]].next);
        if (suffix === '') return indexs[indexs.length - 1];
        for (let j = 0; j < indexs.length; j++) {
          if (WordFilter.source[indexs[j]].substr(-suffix.length) === suffix) {
            if (result === undefined || result < indexs[j]) result = indexs[j];
          }
        }
      }
      if (prefix === '') break;
      current = current[prefix[i]].next;
    }
  }
  function findAllString(subTree) {
    for (let key in subTree) {
      if (subTree[key].isCompleteWord) {
        indexs.push(subTree[key].index);
      }
      findAllString(subTree[key].next);
    }
  }
  return result === undefined ? -1 : result;
};
/** 
 * Your WordFilter object will be instantiated and called as such:
 * var obj = Object.create(WordFilter).createNew(words)
 * var param_1 = obj.f(prefix,suffix)
 */
module.exports = { solution: WordFilter };