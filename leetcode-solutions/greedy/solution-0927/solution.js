/**
 * @param {number[]} A
 * @return {number[]}
 */
var threeEqualParts = function(A) {
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 1) count++;
  }
  if (!count) return [0, A.length - 1];
  if (count % 3) return [-1, -1];
  let partCount = count / 3;
  let current = partCount, L = [], R = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i]) {
      if (current === partCount) L.push(i);
      if (current === 1) R.push(i);
      current--;
    }
    if (!current) current = partCount;
  }
  let S1 = A.slice(L[0], R[0] + 1).toString(), S2 = A.slice(L[1], R[1] + 1).toString(), S3 = A.slice(L[2], R[2] + 1).toString();
  if (S1 === S2 && S2 === S3) {
    let Z1 = L[1] - R[0] - 1, Z2 = L[2] - R[1] - 1, Z3 = A.length - R[2] - 1;
    if (Z3 > Z1 || Z3 > Z2) return [-1, -1];
    return [R[0] + A.length - R[2] - 1, R[1] + A.length - R[2]];
  } else {
    return [-1, -1];
  }
};

console.log(threeEqualParts([0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0]));