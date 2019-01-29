/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  let subBreak = {};
  let wordMap = {};
  for (let i = 0; i< wordDict.length; i++) {
    wordMap[wordDict[i]] = true;
  }
  for (let i = 0; i < s.length; i++) {
    if (wordMap[s.slice(0, i + 1)]) {
      subBreak[s.slice(0, i + 1)] = true;
      continue;
    } else {
      for (let j = i; j >= 0; j--) {
        let mapKey = s.slice(j, i + 1);
        let subKey = s.slice(0, j);
        if (wordMap[mapKey] && subBreak[subKey])
          subBreak[s.slice(0, i + 1)] = true;
      }
    }
  }
  return subBreak[s] ? true : false;
};

module.exports = { solution: wordBreak };
