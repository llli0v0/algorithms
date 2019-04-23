class StreamChecker {
  /**
   * @param {string[]} words
   */
  constructor(words) {
    this.trie = {};
    // The nodes to be query, Every query is traversed
    this.queryNodes = [];
    this.buildTrie(words);
  }

  buildTrie(words) {
    while (words.length) {
      let word = words.shift();
      let currentNode = this.trie;
      for (let i = 0; i < word.length; i++) {
        if (currentNode[word[i]] === undefined) {
          currentNode[word[i]] = { next: {}, complete: false };
        }
        if (i === word.length - 1) {
          currentNode[word[i]].complete = true;
        }
        currentNode = currentNode[word[i]].next;
      }
    }
  }

  /** 
   * @param {character} letter
   * @return {boolean}
   */
  query(letter) {
    let result = false;
    let nextQueryNodes = [];
    while (this.queryNodes.length) {
      let node = this.queryNodes.shift();
      if (node[letter] !== undefined) {
        if (node[letter].complete) {
          result = true;
        }
        nextQueryNodes.push(node[letter].next);
      }
    }
    if (this.trie[letter] !== undefined) {
      if (this.trie[letter].complete) {
        result = true;
      }
      nextQueryNodes.push(this.trie[letter].next);
    }
    this.queryNodes = nextQueryNodes;
    return result;
  }
}
/** 
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */

let stream = new StreamChecker(['cd','f','kl']);
let querys = 'abcdefghijkl';
for (let i = 0; i < querys.length; i++) {
  stream.query(querys[i]);
}