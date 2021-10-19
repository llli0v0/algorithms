/**
 * @param {string} word
 * @return {number}
 */
var wonderfulSubstrings = function(word) {
  let map = { 0: 1 };
  let mark = 0;
  let result = 0;
  for (let i = 0; i < word.length; i++) {
    let code = word[i].charCodeAt() - 97;
    if ((mark & (1 << code)) === (1 << code)) {
      mark -= (1 << code);
    } else {
      mark += (1 << code);
    }
    if (map[mark]) result += map[mark];
    for (let j = 0; j < 26; j++) {
      let key;
      if ((mark & (1 << j)) === (1 << j)) {
        key = mark - (1 << j);
      } else {
        key = mark + (1 << j);
      }
      if (map[key]) result += map[key];
    }
    if (map[mark] === undefined) map[mark] = 0;
    map[mark] += 1;
  }
  return result;
};
