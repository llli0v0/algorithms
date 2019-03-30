/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let hash = {};
  let result = [];
  for (let i = 0; i < strs.length; i++) {
    let key = 0;
    let s = strs[i].split('').sort().join('');
    for (let j = 0; j < strs[i].length; j++) {
      key = key + strs[i][j].charCodeAt();
    }
    if (hash[key] === undefined) {
      hash[key] = {};
    }
    if (hash[key][s] === undefined) {
      hash[key][s] = [];
    }
    hash[key][s].push(strs[i]);
  }
  for (let key in hash) {
    for (let k in hash[key]) {
      result.push(hash[key][k]);
    }
  }
  return result;
};

groupAnagrams(["eat","tea","tan","ate","nat","bat"]);