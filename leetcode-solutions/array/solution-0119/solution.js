/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (!rowIndex) return [[1]];
  let result = [[1]];
  let index = 1;
  while (index <= rowIndex) {
    result.push([]);
    result[1].push(1);
    for (let i = 1; i < index; i++) {
      result[1].push(result[0][i - 1] + result[0][i]);
    }
    result[1].push(1);
    index++;
    result.shift();
  }
  return result[0];
};