/**
 * @param {number} N
 * @param {number[][]} connections
 * @return {number}
 */
var minimumCost = function(N, connections) {
  let n = N;

  connections = connections.sort((a, b) => a[2] - b[2]);

  let S = {};

  let result = 0;

  while (n - 1 && connections.length) {
    let c = connections.shift();

    if (S[c[0]] === undefined) S[c[0]] = new Node();
    if (S[c[1]] === undefined) S[c[1]] = new Node();

    if (S[c[0]].getBelong() !== S[c[1]].getBelong()) {
      result += c[2];

      S[c[1]].getBelong().belong = S[c[0]].getBelong();

      n--;
    }
  }

  if (N > Object.keys(S).length) return -1;

  for (let k in S) {
    if (S[k].getBelong() !== S[1].getBelong()) return -1;
  }

  return result;
};

class Node {
  constructor() {
    this.belong = null;
  }

  getBelong() {
    if (!this.belong) return this;

    return this.belong.getBelong();
  }
}