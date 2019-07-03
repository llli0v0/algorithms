class Student {
  constructor() {
    this.id = null;
    this.belong = null;
  }

  getBelong() {
    if (this.belong === null) return this;
    return this.belong.getBelong();
  }
}

/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
  let N = {};
  for (let i = 0; i < M.length; i++) {
    N[i] = new Student();
    N[i].id = i;
  }

  for (let i = 0; i < M.length; i++) {
    for (let j = i + 1; j < M[i].length; j++) {
      if (M[i][j] && N[i].getBelong() !== N[j].getBelong()) {
        if (N[i].getBelong() !== N[i]) {
          N[i].getBelong().belong = N[i];
          N[i].belong = null;
        }
        N[j].getBelong().belong = N[i];
      }
    }
  }

  let result = 0;
  for (let k in N) {
    if (N[k].belong === null) result++;
  }
  return result;
};