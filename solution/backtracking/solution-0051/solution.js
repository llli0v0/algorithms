/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let matrix = Array(n).fill(null).map(() => Array(n).fill('.'));
  let currentEveryRow = Array(n).fill(n);
  let colUsed = [];
  let result = [];
  function doSubOperation(matrix, currentEveryRow, currentRow, colUsed) {
    while (n - currentEveryRow[currentRow] <= n - 1) {
      let colIndex = n - currentEveryRow[currentRow];
      if (currentRow === 0) {
        handleQ(matrix, currentRow, colIndex, colUsed, result, currentEveryRow);
      } else {
        checkChangeLR(matrix, currentRow, colIndex);
        if (
          !matrix[currentRow][colIndex]['L'] &&
          !matrix[currentRow][colIndex]['R'] &&
          colUsed.indexOf(colIndex) === -1
        ) {
          handleQ(matrix, currentRow, colIndex, colUsed, result, currentEveryRow);
        }
      }
      clearMatrixCurrentEveryRowColUsed(matrix, currentEveryRow, currentRow, colUsed);
      currentEveryRow[currentRow]--;
    }
  }
  function clearMatrixCurrentEveryRowColUsed(matrix, currentEveryRow, currentRow, colUsed) {
    for (let i = 0; i < n; i++) {
      if (i >= currentRow) {
        for (let j = 0; j < n; j++) {
          if (i === currentRow) {
            if (matrix[i][j] === 'Q') matrix[i][j] = '.';
          } else {
            matrix[i][j] = '.';
          }
        }
      }
    }
    for (let i = 0; i < currentEveryRow.length; i++) {
      if (i > currentRow) currentEveryRow[i] = n;
    }
    colUsed.splice(currentRow);
  }
  function handleQ(matrix, currentRow, colIndex, colUsed, result) {
    matrix[currentRow][colIndex] = 'Q';
    if (currentRow > 0) {
      for (let i = colIndex + 1; i < n; i++) {
        checkChangeLR(matrix, currentRow, i);
      }
    }
    if (matrix[currentRow + 1] && matrix[currentRow + 1][colIndex - 1] !== undefined) {
      if (typeof matrix[currentRow + 1][colIndex - 1] === 'string') {
        matrix[currentRow + 1][colIndex - 1] = { L: 1, R: 0 };
      } else {
        matrix[currentRow + 1][colIndex - 1]['L'] = 1;
      }
    }
    if (matrix[currentRow + 1] && matrix[currentRow + 1][colIndex + 1] !== undefined) {
      if (typeof matrix[currentRow + 1][colIndex + 1] === 'string') {
        matrix[currentRow + 1][colIndex + 1] = { L: 0, R: 1 };
      } else {
        matrix[currentRow + 1][colIndex + 1]['R'] = 1;
      }
    }
    colUsed.push(colIndex);
    if (currentRow === n - 1) {
      result.push(deepClone(matrix));
    }
    doSubOperation(matrix, currentEveryRow, currentRow + 1, colUsed);
  }
  function checkChangeLR(matrix, currentRow, colIndex) {
    if (
      matrix[currentRow - 1][colIndex - 1] === 'Q' ||
      (matrix[currentRow - 1][colIndex - 1] && matrix[currentRow - 1][colIndex - 1]['R'])
    ) {
      if (typeof matrix[currentRow][colIndex] === 'string') {
        matrix[currentRow][colIndex] = { L: 0, R: 1 };
      } else {
        matrix[currentRow][colIndex]['R'] = 1;
      }
    }
    if (
      matrix[currentRow - 1][colIndex + 1] === 'Q' ||
      (matrix[currentRow - 1][colIndex + 1] && matrix[currentRow - 1][colIndex + 1]['L'])
    ) {
      if (typeof matrix[currentRow][colIndex] === 'string') {
        matrix[currentRow][colIndex] = { L: 1, R: 0 };
      } else {
        matrix[currentRow][colIndex]['L'] = 1;
      }
    }
  }
  function deepClone(matrix) {
    let arr = [];
    for (let i = 0; i < n; i++) {
      let str = '';
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] === 'Q') {
          str = str + matrix[i][j];
        } else {
          str = str + '.';
        }
      }
      arr.push(str);
      str = '';
    }
    return arr;
  }
  doSubOperation(matrix, currentEveryRow, 0, colUsed);
  return result;
};