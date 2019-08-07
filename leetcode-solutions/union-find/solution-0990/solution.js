/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
  let S = {};

  for (let i = 0; i < equations.length; i++) {
    let a = equations[i];

    if (!S[a[0]]) S[a[0]] = new Node();
    if (!S[a[3]]) S[a[3]] = new Node();
    
    if (a[1] === '=') {
      if (S[a[0]].P !== S[a[3]].P) {
        S[a[0]].P.parent = S[a[3]].P;
      }
    }
  }

  for (let i = 0; i < equations.length; i++) {
    let a = equations[i];

    if (a[1] === '!') {
      if (S[a[0]].P === S[a[3]].P) return false;
    }
  }

  return true;
};

class Node {
  constructor() {
    this.parent = null;
  }

  get P() {
    if (!this.parent) return this;
    return this.parent.P;
  }
}