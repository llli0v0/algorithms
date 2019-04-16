/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  let atoz = {};
  let words = {};
  for (let i = 0; i < beginWord.length; i++) {
    atoz[i] = new Set();
  }
  for (let i = 0; i < wordList.length; i++) {
    words[wordList[i]] = i;
    for (let j = 0; j < wordList[i].length; j++) {
      atoz[j].add(wordList[i][j]);
    }
  }
  let current = [];
  let next = [];
  let aler = new Set();
  let stop = false;
  let result = [];
  for (let i = 0; i < beginWord.length; i++) {
    for (let key of atoz[i]) {
      let beginNext = beginWord.slice(0, i) + key + beginWord.slice(i + 1);
      if (beginNext === endWord) {
        result.push(String(words[beginNext]));
        stop = true;
      }
      if (words[beginNext] !== undefined) {
        current.push(String(words[beginNext]));
      }
    }
  }
  for (let i = 0; i < current.length; i++) {
    aler.add(current[i]);
  }
  if (stop) current = [];
  let LL = [];
  while (current.length) {
    let cur = current.shift().split(',');
    let lastIndex = cur[cur.length - 1];
    let lastKey = wordList[lastIndex]; 
    for (let i = 0; i < lastKey.length; i++) {
      for (let key of atoz[i]) {
        let ne = lastKey.slice(0, i) + key + lastKey.slice(i + 1);
        if (ne === endWord) {
          result.push(cur.join(',') + ',' + words[ne]);
          stop = true;
        }
        if (words[ne] !== undefined && !aler.has(String(words[ne]))) {
          next.push(cur.join(',') + ',' + words[ne]);
          LL.push(String(words[ne]));
        }
      }
    }
    if (!current.length && !stop) {
      for (let i = 0; i < LL.length; i++) {
        aler.add(LL[i]);
      }
      LL = [];
      current = next;
      next = [];
    }
  }
  for (let i = 0; i < result.length; i++) {
    result[i] = result[i].split(',');
    for (let j = 0; j < result[i].length; j++) {
      result[i][j] = wordList[result[i][j]];
    }
    result[i].unshift(beginWord);
  }
  return result;
};