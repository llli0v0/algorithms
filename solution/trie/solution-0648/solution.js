/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dict, sentence) {
  let trie = {};
  for (let i = 0; i < dict.length; i++) {
    buildTrie(trie, dict[i]);
  }
  let s = sentence.split(' ');
  for (let i = 0; i < s.length; i++) {
    let w = '';
    let t = trie;
    let index = 0, key;
    while (t && t[key = s[i][index]]) {
      w = w + key;
      if (t[key].complete) {
        s[i] = w;
        break;
      }
      t = t[key].next;
      index++;
    }
  }
  return s.join(' ');
  function buildTrie(trie, word) {
    if (trie[word[0]] === undefined) {
      trie[word[0]] = { complete: false, next: {} };
    }
    if (word.length === 1) {
      trie[word[0]].complete = true;
      return;
    }
    buildTrie(trie[word[0]].next, word.slice(1));
  }
};

replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery");