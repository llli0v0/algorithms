/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
  let result = new Array(matrix.length).fill(null).map(() => new Array(matrix[0].length).fill(null));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        result[i][j] = 0;
      } else {
        result[i][j] = bfs(i, j);
      }
    }
  }
  return result;
  function bfs(i, j) {
    let current = [], next = [], D = 1, visited = {};
    matrix[i - 1] && matrix[i - 1][j] !== undefined && (current.push([i - 1, j, matrix[i - 1][j]]));
    matrix[i + 1] && matrix[i + 1][j] !== undefined && (current.push([i + 1, j, matrix[i + 1][j]]));
    matrix[i][j - 1] !== undefined && (current.push([i, j - 1, matrix[i][j - 1]]));
    matrix[i][j + 1] !== undefined && (current.push([i, j + 1, matrix[i][j + 1]]));
    while (current.length) {
      let C = current.pop();
      visited[C[0] + '-' + C[1]] = true;
      if (C[2] === 0) return D;
      if (matrix[C[0] + 1] && !visited[C[0] + 1 + '-' + C[1]]) next.push([C[0] + 1, C[1], matrix[C[0] + 1][C[1]]]);
      if (matrix[C[0] - 1] && !visited[C[0] - 1 + '-' + C[1]]) next.push([C[0] - 1, C[1], matrix[C[0] - 1][C[1]]]);
      if (matrix[C[0]][C[1] + 1] !== undefined && !visited[C[0] + '-' + (C[1] + 1)]) next.push([C[0], C[1] + 1, matrix[C[0]][C[1] + 1]]);
      if (matrix[C[0]][C[1] - 1] !== undefined && !visited[C[0] + '-' + (C[1] - 1)]) next.push([C[0], C[1] - 1, matrix[C[0]][C[1] - 1]]);
      if (!current.length) {
        current = [...next];
        next = [];
        D++;
      }
    }
  }
};

console.log(updateMatrix([
  [0,0,0],
  [0,1,0],
  [1,1,1]
]));