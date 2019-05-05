/**
 * Initialize your data structure here.
 */
class Trie {
  constructor() {
    this.trie = {};
  }

  /**
   * Inserts a word into the trie. 
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let currentNode = this.trie;
    for (let i = 0; i < word.length; i++) {
      if (currentNode[word[i]] === undefined) {
        currentNode[word[i]] = { key: word[i], next: {}, complete: false };
      }
      if (i === word.length - 1) currentNode[word[i]].complete = true;
      currentNode = currentNode[word[i]].next;
    }
  }

  /**
   * Returns if the word is in the trie. 
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let currentNode = this.trie;
    for (let i = 0; i < word.length; i++) {
      if (currentNode[word[i]] === undefined) return false;
      if (currentNode[word[i]].complete && i === word.length - 1) return true;
      currentNode = currentNode[word[i]].next;
    }
    return false;
  }

  /**
   * Returns if there is any word in the trie that starts with the given prefix. 
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let currentNode = this.trie;
    for (let i = 0; i < prefix.length; i++) {
      if (currentNode[prefix[i]] === undefined) return false;
      currentNode = currentNode[prefix[i]].next;
    }
    return true;
  }
}

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */