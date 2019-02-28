/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let matrix = Array(s.length).fill(null).map(() => Array(s.length).fill(null));
  let currentMaxLen = 0;
  let resultRow, resultCol;
  for (let rowIndex = 0; rowIndex < s.length; rowIndex++) {
    for (let colIndex = 0; colIndex <= rowIndex; colIndex++) {
      if (s[rowIndex] === s[colIndex]) {
        if (rowIndex - colIndex <= 2) {
          matrix[rowIndex][colIndex] = 1;
          if (rowIndex - colIndex + 1 > currentMaxLen) {
            currentMaxLen = rowIndex - colIndex + 1;
            resultRow = rowIndex;
            resultCol = colIndex;
          }
        } else if (matrix[rowIndex - 1][colIndex + 1] === 1) {
          matrix[rowIndex][colIndex] = 1;
          if (rowIndex - colIndex + 1 > currentMaxLen) {
            currentMaxLen = rowIndex - colIndex + 1;
            resultRow = rowIndex;
            resultCol = colIndex;
          }
        } else {
          matrix[rowIndex][colIndex] = 0;
        }
      } else {
        matrix[rowIndex][colIndex] = 0;
      }
    }
  }
  return s.slice(resultCol, resultRow + 1);
};