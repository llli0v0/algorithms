/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  let matrix = new Array(num2.length).fill(null).map(() => new Array(num1.length + num2.length).fill(0));
  let startIndex = matrix[0].length - num1.length;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = num1.length - 1; j >= 0; j--) {
      let rowIndex = num2.length - 1 - i;
      let colIndex = j + startIndex;
      let re = String(parseInt(num1[j]) * parseInt(num2[rowIndex]) + matrix[rowIndex][colIndex]);
      if (re.length === 1) {
        matrix[rowIndex][colIndex] = parseInt(re[0]);
      } else {
        matrix[rowIndex][colIndex] = parseInt(re[1]);
        matrix[rowIndex][colIndex - 1] = parseInt(re[0]);
      }
    }
    startIndex--;
  }
  let result = '';
  for (let i = matrix[0].length - 1; i >= 0; i--) {
    let sum = 0;
    for (let j = 0; j < matrix.length; j++) {
      sum += matrix[j][i];
    }
    sum = String(sum);
    if (sum.length === 1) {
      result = sum + result;
    } else {
      if (matrix[0][i - 1] !== undefined) {
        result = sum[sum.length - 1] + result;
        matrix[0][i - 1] += parseInt(sum.slice(0, sum.length - 1));
      } else {
        result = sum + result;
      }
    }
  }
  let index = 0;
  while (result[index] === '0') {
    index++;
  }
  return result.slice(index) === '' ? '0' : result.slice(index);
};