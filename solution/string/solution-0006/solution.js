/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) return s;
  if (numRows === 2) {
    let result = '';
    for (let i = 0; i < s.length; i = i + 2) {
      if (s[i]) {
        result = result + s[i];
      }
    }
    for (let i = 1; i < s.length; i = i + 2) {
      if (s[i]) {
        result = result + s[i];
      }
    }
    return result;
  }
  let width = Math.floor(s.length / (numRows + numRows - 2)) * 2;
  if (s.length % (numRows + numRows - 2)) {
    if (s.length % (numRows + numRows - 2) > numRows) {
      width = width + 2;
    } else {
      width = width + 1;
    }
  }
  let matrix = Array(numRows).fill(null).map(() => Array(width).fill(null));
  let sign = 1;
  let currentProgress = 0;
  let sIndex = 0;
  while (currentProgress < width) {
    if (sign) {
      let colIndex = currentProgress;
      for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
        if (s[sIndex]) {
          matrix[rowIndex][colIndex] = s[sIndex];
          sIndex++;
        }
      }
      sign = 0;
    } else {
      let colIndex = currentProgress;
      for (let rowIndex = numRows - 2; rowIndex > 0; rowIndex--) {
        if (s[sIndex]) {
          matrix[rowIndex][colIndex] = s[sIndex];
          sIndex++;
        }
      }
      sign = 1;
    }
    currentProgress++;
  }
  let result = '';
  for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
    for (let colIndex = 0; colIndex < width; colIndex++) {
      if (matrix[rowIndex][colIndex] !== null) {
        result = result + matrix[rowIndex][colIndex];
      }
    }
  }
  return result;
};