/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  let wordsMap = {};
  for (let i = 0; i < wordList.length; i++) {
    for (let j = 0; j < wordList[i].length; j++) {
      let k = wordList[i].slice(0, j) + ' ' + wordList[i].slice(j + 1);
      if (wordsMap[k] === undefined) wordsMap[k] = {};
      wordsMap[k][wordList[i]] = wordList[i];
    }
  }
  let s = new Set([beginWord]);
  let l = [beginWord];
  let n = [];
  let result = 1;
  while (l.length) {
    let a = l.pop();
    for (let i = 0; i < a.length; i++) {
      let k = a.slice(0, i) + ' ' + a.slice(i + 1);
      if (!wordsMap[k]) continue;
      let ne = Object.keys(wordsMap[k]);
      for (let j = 0; j < ne.length; j++) {
        if (!s.has(ne[j])) {
          if (ne[j] === endWord) return result + 1;
          n.push(ne[j]);
        }
      }
    }
    if (!l.length) {
      l = n;
      n = [];
      result += 1;
      for (let i = 0; i < l.length; i++) {
        s.add(l[i]);
      }
    }
  }
  return 0;
};