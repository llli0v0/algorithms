/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  if (s === '' || words.length === 0) return [];
  let currentHave = 0, start = 0, current = 0, result = [], defaultO = {}, O = {}, l = words[0].length;
  for (let i = 0; i < words.length; i++) {
    if (O[words[i]] === undefined) {
      O[words[i]] = 1;
    } else {
      O[words[i]] = O[words[i]] + 1;
    }
  }
  defaultO = {...O};
  while (current < s.length) {
    let key = s.slice(current, current + l);
    if (O[key] !== undefined && O[key] >= 1) {
      currentHave = currentHave + 1;
      current = current + l;
      O[key] = O[key] - 1;
    } else {
      currentHave = 0;
      current = start + 1;
      O = {...defaultO};
      start = current;
    }
    if (currentHave === words.length) {
      result.push(start);
      currentHave = 0;
      current = start + 1;
      O = {...defaultO};
      start = current;
    }
  }
  return result;
};