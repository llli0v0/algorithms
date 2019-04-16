/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (!numRows) return [];
  let result = [[1]];
  let rowIndex = 1;
  while (rowIndex < numRows) {
    result.push([]);
    result[rowIndex].push(1);
    for (let i = 1; i < rowIndex; i++) {
      result[rowIndex].push(result[rowIndex - 1][i - 1] + result[rowIndex - 1][i]);
    }
    result[rowIndex].push(1);
    rowIndex++;
  }
  return result;
};