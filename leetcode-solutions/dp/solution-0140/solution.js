/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  if (s === '') return [];
  let subWord = {};
  let wordMap = {};
  for (let i = 0; i < wordDict.length; i++) {
    wordMap[wordDict[i]] = wordDict[i];
  }
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j >= 0; j--) {
      let mapKey = s.slice(j, i + 1);
      let subKey = s.slice(0, j);
      if (wordMap[mapKey] && (subWord[subKey] || subKey === '')) {
        if (subWord[s.slice(0, i + 1)] === undefined) subWord[s.slice(0, i + 1)] = {};
        subWord[s.slice(0, i + 1)][wordMap[mapKey]] = subWord[subKey];
      }
    }
  }
  let results = [];
  function getResult(obj, s = '') {
    for (let key in obj) {
      if (obj[key] === undefined) return results.push(s === '' ? key + s : key + ' ' + s);
      getResult(obj[key], s === '' ? key + s : key + ' ' + s);
    }
  }
  getResult(subWord[s]);
  return results;
};

module.exports = { solution: wordBreak };