function maximumValueSum(board: number[][]): number {
  const matrix: number[][][] = new Array(board.length).fill(null).map(() => new Array(board[0].length).fill(null).map(() => [0, 0]));
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      matrix[i][j] = [board[i][j], j];
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].sort((a, b) => b[0] - a[0]);
  }
  let res = -Infinity;
  for (let i = 0; i < matrix.length; i++) {
    for (let x = 0; x < 3; x++) {
      let [v1, index1] = matrix[i][x];
      for (let j = i + 1; j < matrix.length; j++) {
        for (let y = 0; y < 3; y++) {
          let [v2, index2] = matrix[j][y];
          if (index1 === index2) continue;
          for (let n = j + 1; n < matrix.length; n++) {
            for (let z = 0; z < 3; z++) {
              let [v3, index3] = matrix[n][z];
              if (index1 === index3 || index2 === index3) continue;
              res = Math.max(res, v1 + v2 + v3);
            }
          }
        }
      }
    }
  }
  return res;
};
