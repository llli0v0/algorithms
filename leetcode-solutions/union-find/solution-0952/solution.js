class Node {
  constructor() {
    this.size = 1;
    this.belong = null;
  }

  getBelog() {
    if (this.belong === null) return this;
    return this.belong.getBelog();
  }
}

/**
 * @param {number[]} A
 * @return {number}
 */
var largestComponentSize = function(A) {
  let S = new Set();

  for (let i = 0; i < A.length; i++) {
    let s = helper(A[i]);

    A[i] = s;
  }

  let C = {};

  for (let k of S) C[k] = null;

  let result = 1;

  for (let i = 0; i < A.length; i++) {
    let node = new Node();

    let a = A[i];

    for (let j = 0; j < a.length; j++) {
      if (C[a[j]] !== null) {
        let p = C[a[j]].getBelog();
        if (p !== node) {
          p.belong = node;
          C[a[j]] = node;
          node.size += p.size;
          result = Math.max(result, node.size);
        }
      } else {
        C[a[j]] = node;
      }
    }
  }

  return result;

  function helper(a) {
    let s = new Set();

    while (a % 2 === 0) {
      s.add(2);
      a /= 2;
    }

    for (let i = 3; i < parseInt(Math.sqrt(a)) + 1; i += 2) {
      while (a % i == 0) {
        s.add(i);
        a /= i;
      }
    }

    if (a > 2) s.add(a);

    for (let k of s) S.add(k);

    return [...s];
  }
};
