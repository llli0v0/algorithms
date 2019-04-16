/**
 * @param {number[][]} A
 * @return {number}
 */
var numEnclaves = function(A) {
  for (let i = 0; i < A[0].length; i++) {
    diffuse([0, i]);
  }
  for (let i = 0; i < A[A.length - 1].length; i++) {
    diffuse([A.length - 1, i]);
  }
  for (let i = 1; i < A.length - 1; i++) {
    diffuse([i, 0]);
  }
  for (let i = 1; i < A.length - 1; i++) {
    diffuse([i, A[0].length - 1]);
  }
  let result = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      if (A[i][j] === 1) result++;
    }
  }
  return result;
  function diffuse(mc) {
    if (A[mc[0]][mc[1]] === 2 || A[mc[0]][mc[1]] === 0) return;
    A[mc[0]][mc[1]] = 2;
    if (A[mc[0]][mc[1] - 1] !== undefined) diffuse([mc[0], mc[1] - 1]);
    if (A[mc[0]][mc[1] + 1] !== undefined) diffuse([mc[0], mc[1] + 1]);
    if (A[mc[0] - 1]) diffuse([mc[0] - 1, mc[1]]);
    if (A[mc[0] + 1]) diffuse([mc[0] + 1, mc[1]]);
  }
};

numEnclaves([[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]);