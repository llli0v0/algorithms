class Word {
  constructor() {
    this.belong = null
  }

  getBelong() {
    if (this.belong === null) return this;
    return this.belong.getBelong();
  }
}

/**
 * @param {string[]} A
 * @return {number}
 */
var numSimilarGroups = function(A) {
  let M = {};
  let D = {};

  for (let i = 0; i < A.length; i++) {
    M[A[i]] = new Word();
    D[i] = [];

    for (let j = i + 1; j < A.length; j++) {
      let c = 0;
      for (let n = 0; n < A[i].length; n++) {
        if (A[i][n] !== A[j][n]) c++;
      }
      if (c === 2) D[i].push(j);
    }
  }

  for (let i = 0; i < A.length; i++) {
    for (let n = 0; n < D[i].length; n++) {
      let k = A[D[i][n]];

      if (M[k] !== undefined && k !== A[i]) {
        if (M[A[i]].belong !== null) {
          M[A[i]].getBelong().belong = M[A[i]];
          M[A[i]].belong = null;
        }
        if (M[k].getBelong() !== M[A[i]]) {
          M[k].getBelong().belong = M[A[i]];
        }
      }
    }
  }

  let result = 0;
  for (let k in M) {
    if (M[k].belong === null) result++;
  }
  return result;
};
