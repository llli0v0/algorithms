/**
 * @param {number} N
 * @param {number[][]} relations
 * @return {number}
 */
var minimumSemesters = function(N, relations) {
  let M = {};
  let C = {};

  for (let i = 0; i < relations.length; i++) {
    let a = relations[i];

    if (M[a[0]] === undefined) M[a[0]] = new Set();
    if (C[a[1]] === undefined) C[a[1]] = 0;
    if (C[a[0]] === undefined) C[a[0]] = 0;

    M[a[0]].add(a[1]);
    C[a[1]] += 1;
  }

  let result = 0;

  while (true) {
    let q = [];

    if (!Object.keys(C).length) return result;

    for (let key in C) {
      if (C[key] === 0) {
        q.push(key);
        delete C[key];
      }
    }

    if (!q.length) return -1;

    for (let i = 0; i < q.length; i++) {
      if (!M[q[i]]) continue;
      for (let k of M[q[i]]) C[k] -= 1;
    }

    result += 1;
  }
};