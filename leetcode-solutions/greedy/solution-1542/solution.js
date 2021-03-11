/**
 * @param {string} s
 * @return {number}
 */
var longestAwesome = function(s) {
  let marks = {};
  let mark = 0;
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let int = parseInt(s[i]);
    if ((mark & (2**int)) === 2**int) mark -= 2**int;
    else mark += 2**int;
    if (mark === 0 || Math.log2(mark) % 1 === 0) result = i + 1;
    if (marks[mark] !== undefined) result = Math.max(result, i - marks[mark]);
    else marks[mark] = i;
    for (let j = 0; j < 10; j++) {
      if ((mark & 2**j) === 2**j) {
        if (marks[mark - 2**j] !== undefined) result = Math.max(result, i - marks[mark - 2**j]);
      } else {
        if (marks[mark + 2**j] !== undefined) result = Math.max(result, i - marks[mark + 2**j]);
      }
    }
  }
  return result;
};