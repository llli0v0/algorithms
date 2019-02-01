/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  class TrieNode {
    constructor() {
      this.isComplete = false;
      this.next = {};
    }
  }
  let Trie = {}, result = {}, wordMap = {};
  for (let i = 0; i < words.length; i++) {
    wordMap[words[i]] = true;
    let current = 0;
    let currentNode = Trie;
    while (current < words[i].length) {
      let currentKey = words[i][current];
      if (currentNode[currentKey] === undefined) currentNode[currentKey] = new TrieNode();
      if (current === words[i].length - 1) {
        currentNode[currentKey].isComplete = true;
        currentNode[currentKey].wholeWord = words[i];
      }
      currentNode = currentNode[currentKey].next;
      current++;
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let key = board[i][j];
      if (Trie[key]) {
        if (Trie[key].isComplete) result[Trie[key].wholeWord] = true;
        find(i, j, Trie[key].next, '' + i + j);
      }
    }
  }
  function find(i, j, next, s) {
    let arr = s.split('_');
    if (i > 0 && next[board[i - 1][j]] && arr.indexOf('' + (i - 1) + j) === -1) {
      let key = board[i - 1][j];
      if (next[key].isComplete) result[next[key].wholeWord] = true;
      find(i - 1, j, next[key].next, s + '_' + (i - 1) + j);
    }
    if (j > 0 && next[board[i][j - 1]] && arr.indexOf('' + i + (j - 1)) === -1) {
      let key = board[i][j - 1];
      if (next[key].isComplete) result[next[key].wholeWord] = true;
      find(i, j - 1, next[key].next, s + '_' + i + (j - 1));
    }
    if (i < board.length - 1 && next[board[i + 1][j]] && arr.indexOf('' + (i + 1) + j) === -1) {
      let key = board[i + 1][j];
      if (next[key].isComplete) result[next[key].wholeWord] = true;
      find(i + 1, j, next[key].next, s + '_' + (i + 1) + j);
    }
    if (j < board[0].length - 1 && next[board[i][j + 1]] && arr.indexOf('' + i + (j + 1)) === -1) {
      let key = board[i][j + 1];
      if (next[key].isComplete) result[next[key].wholeWord] = true;
      find(i, j + 1, next[key].next, s + '_' + i + (j + 1));
    }
  }
  return Object.keys(result);
};

module.exports = { solution: findWords };