/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  let matrix = new Array(t.length).fill(null).map(() => new Array(s.length).fill(0));
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[0]) matrix[0][i] = 1;
  }
  for (let i = 1; i < t.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (j >= i && t[i] === s[j]) {
        let result = 0;
        for (let n = 0; n < j; n++) result += matrix[i - 1][n];
        matrix[i][j] = result;
      }
    }
  }
  let result = 0;
  for (let i = 0; i < s.length; i++) result += matrix[t.length - 1][i];
  return result;
};

module.exports = { solution: numDistinct };