class AutocompleteSystem {
  /**
   * @param {string[]} sentences
   * @param {number[]} times
   */
  constructor(sentences, times) {
    this.trie = {};
    this.insertSentence(sentences, times);
    this.currentSentence = '';
    this.currentTrieNode = this.trie;
  }

  insertSentence(sentences, times) {
    for (let i = 0; i < sentences.length; i++) {
      let a = sentences[i];
      let c = this.trie;

      for (let j = 0; j < a.length; j++) {
        if (c[a[j]] === undefined) {
          c[a[j]] = { next: {}, complete: false, times: 0 };
        }
        if (j === a.length - 1) {
          c[a[j]].complete = true;
          c[a[j]].times += times[i];
        } else {
          c = c[a[j]].next;
        }
      }
    }
  }

  /** 
   * @param {character} c
   * @return {string[]}
   */
  input(c) {
    if (c === '#') {
      this.insertSentence([this.currentSentence], [1]);
      this.currentSentence = '';
      this.currentTrieNode = this.trie;
      return [];
    }

    this.currentSentence += c;
    
    let sentences = this.currentTrieNode[c] && this.currentTrieNode[c].complete ? [[this.currentSentence, this.currentTrieNode[c].times]] : [];

    this.currentTrieNode = this.currentTrieNode[c] === undefined ? {} : this.currentTrieNode[c].next;
    
    sentences = sentences.concat(this.getSentences(this.currentTrieNode, this.currentSentence));

    sentences.sort((a, b) => {
      if (a[1] === b[1]) {
        let len = Math.min(a[0].length, b[0].length);

        for (let i = 0; i < len; i++) {
          if (a[0][i] === b[0][i]) continue;

          return a[0][i].charCodeAt() - b[0][i].charCodeAt();
        }

        return a[0].length - b[0].length;
      }
      return b[1] - a[1];
    });

    return sentences.slice(0, 3).map(i => i[0]);
  }

  getSentences(node, s) {
    let sentences = [];

    for (let k in node) {
      if (node[k].complete) sentences.push([s + k, node[k].times]);
      sentences = sentences.concat(this.getSentences(node[k].next, s + k));
    }

    return sentences;
  }
}

/** 
 * Your AutocompleteSystem object will be instantiated and called as such:
 * var obj = new AutocompleteSystem(sentences, times)
 * var param_1 = obj.input(c)
 */
