/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
var wordSubsets = function(A, B) {
  let c = {};
  for (let i = 0; i < B.length; i++) {
    let a = B[i];
    let b = {};
    for (let j = 0; j < a.length; j++) {
      if (b[a[j]] === undefined) b[a[j]] = 0;
      b[a[j]] += 1;
    }
    for (let key in b) {
      if (c[key] === undefined) {
        c[key] = b[key];
      } else {
        c[key] = Math.max(c[key], b[key]);
      }
    }
  }
  let result = [];
  for (let i = 0; i < A.length; i++) {
    let n = A[i];
    let m = {};
    for (let j = 0; j < n.length; j++) {
      if (m[n[j]] === undefined) m[n[j]] = 0;
      m[n[j]] += 1;
    }
    let is = true;
    for (let key in c) {
      if (m[key] === undefined || m[key] < c[key]) is = false;
    }
    if (is) result.push(n);
  }
  return result;
};