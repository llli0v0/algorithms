/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
  let wordsMap = {};
  let result = [];
  for (let i = 0; i < words.length; i++) {
    wordsMap[words[i]] = { word: words[i], index: i };
  }
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let rsWord = reverseWord(word);
    if (wordsMap[rsWord] && rsWord !== word) {
      result.push([i, wordsMap[rsWord].index]);
    }
    if (checkPure(word)) {
      for (let j = i + 1; j < words.length; j++) {
        if (checkPure(words[j], word[0]) && words[j] !== word) {
          result.push([i, j]);
          result.push([j, i]);
        }
      }
      continue;
    }
    if (rsWord === word) {
      if (wordsMap[''] !== undefined) {
        result.push([i, wordsMap[''].index]);
        result.push([wordsMap[''].index, i]);
      }
    }
    for (let j = 0; j < word.length - 1; j++) {
      let left = word.slice(0, j + 1);
      let right = word.slice(j + 1);
      let reLeft = reverseWord(left);
      let reRight = reverseWord(right);
      if (checkPali(left) && wordsMap[reRight] !== undefined) result.push([wordsMap[reRight].index, i]);
      if (checkPali(right) && wordsMap[reLeft] !== undefined) result.push([i, wordsMap[reLeft].index]);
    }
  }
  function checkPali(word) {
    for (let i = 0; i < word.length / 2; i++) {
      if (word[i] !== word[word.length - 1 - i]) return false;
    }
    return true;
  }
  function checkPure(word, head) {
    let sign = head || word[0];
    for (let i = 0; i < word.length; i++) {
      if (word[i] !== sign) return false;
    }
    return true;
  }
  function reverseWord(word) {
    let s = '';
    for (let i = word.length - 1; i >= 0; i--) {
      s += word[i];
    }
    return s;
  }
  return result;
};

module.exports = { solution: palindromePairs };