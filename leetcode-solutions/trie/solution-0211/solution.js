/**
 * Initialize your data structure here.
 */

class WordDictionary {
  constructor() {
    this.trie = {};
    this.searchResults = [];
  }

  addWord(word) {
    let cur = this.trie;
    for (let j = 0; j < word.length; j++) {
      if (cur[word[j]] === undefined) {
        cur[word[j]] = { complete: false, next: {} };
      }
      if (j === word.length - 1) cur[word[j]].complete = true;
      cur = cur[word[j]].next;
    }
  }

  search(word) {
    this.searchResults = [];
    this.find(word, this.trie);
    return this.searchResults.some(i => i);
  }

  find(word, trie) {
    if (word[0] === '.') {
      for (let key in trie) {
        if (word.length === 1 && trie[key] && trie[key].complete) {
          this.searchResults.push(true);
          return;
        }
        this.find(word.slice(1), trie[key].next);
      }
    } else {
      if (word.length === 1 && trie[word[0]] && trie[word[0]].complete) {
        this.searchResults.push(true);
      }
      if (trie[word[0]] === undefined) {
        this.searchResults.push(false);
      } else {
        this.find(word.slice(1), trie[word[0]].next);
      }
    }
  }
}

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = Object.create(WordDictionary).createNew()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

let dic = new WordDictionary();
dic.addWord('a');
dic.addWord('a');
dic.search('.');