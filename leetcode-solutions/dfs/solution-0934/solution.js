/**
 * @param {number[][]} A
 * @return {number}
 */
var shortestBridge = function(A) {
  let a = helper();
  let S = [a];
  let V = new Set();
  let B = [];
  while (S.length) {
    let a = S.pop();
    let k = a.join();
    if (!V.has(k)) {
      V.add(k);
      A[a[0]][a[1]] = 2;
      if (A[a[0] - 1] && A[a[0] - 1][a[1]] === 0 || A[a[0] + 1] && A[a[0] + 1][a[1]] === 0 || A[a[0]][a[1] + 1] === 0 || A[a[0]][a[1] - 1] === 0) B.push(a);
      if (A[a[0] - 1] && A[a[0] - 1][a[1]]) S.push([a[0] - 1, a[1]]);
      if (A[a[0] + 1] && A[a[0] + 1][a[1]]) S.push([a[0] + 1, a[1]]);
      if (A[a[0]][a[1] - 1]) S.push([a[0], a[1] - 1]);
      if (A[a[0]][a[1] + 1]) S.push([a[0], a[1] + 1]);
    }
  }
  let N = [];
  let result = -1;
  while (B.length) {
    for (let i = 0; i < B.length; i++) {
      let a = B[i];
      V.add(a.join());
      if (A[a[0]][a[1]] === 1) return result;
      A[a[0]][a[1]] = 2;
    }
    let T = new Set();
    for (let i = 0; i < B.length; i++) {
      let a = B[i];
      let s1 = [a[0] - 1, a[1]].join();
      if (A[a[0] - 1] && A[a[0] - 1][a[1]] !== 2 && !V.has(s1) && !T.has(s1)) {
        N.push([a[0] - 1, a[1]]);
        T.add(s1);
      }
      let s2 = [a[0] + 1, a[1]].join();
      if (A[a[0] + 1] && A[a[0] + 1][a[1]] !== 2 && !V.has(s2) && !T.has(s2)) {
        N.push([a[0] + 1, a[1]]);
        T.add(s2);
      }
      let s3 = [a[0], a[1] - 1].join();
      if (A[a[0]][a[1] - 1] !== undefined && A[a[0]][a[1] - 1] !== 2 && !V.has(s3) && !T.has(s3)) {
        N.push([a[0], a[1] - 1]);
        T.add(s3);
      }
      let s4 = [a[0], a[1] + 1].join();
      if (A[a[0]][a[1] + 1] !== undefined && A[a[0]][a[1] + 1] !== 2 && !V.has(s4) && !T.has(s4)) {
        N.push([a[0], a[1] + 1]);
        T.add(s4);
      }
    }
    B = N;
    N = [];
    result += 1;
  }

  function helper() {
    for (let i = 0; i < A.length; i++) {
      for (let j = 0; j < A[i].length; j++) {
        if (A[i][j] === 1) return [i, j];
      }
    }
  }
};