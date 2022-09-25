/**
 * @param {string[]} words
 * @return {number[]}
 */
var sumPrefixScores = function(words) {
  let trie = {};
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let cur = trie;
    for (let j = 0; j < word.length; j++) {
      let s = word[j];
      if (cur[s] === undefined) {
        cur[s] = { next: {}, count: 0, index: [] };
      }
      cur[s].count++;
      cur[s].index.push(i);
      cur = cur[s].next;
    }
  }
  let res = new Array(words.length).fill(0);
  for (let key in trie) {
    dfs(trie[key]);
  }
  return res;

  function dfs(node) {
    let { next, count, index } = node;
    for (let i = 0; i < index.length; i++) {
      res[index[i]] += count;
    }
    for (let key in next) {
      dfs(next[key]);
    }
  }
};
