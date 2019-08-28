/**
 * @param {number} n
 * @param {number[]} wells
 * @param {number[][]} pipes
 * @return {number}
 */
var minCostToSupplyWater = function(n, wells, pipes) {
  pipes.sort((a, b) => a[2] - b[2]);

  let S = {};

  for (let i = 1; i <= n; i++) S[i] = new Node(i, wells[i - 1]);

  let result = 0;

  for (let i = 0; i < pipes.length; i++) {
    let a = pipes[i][0];
    let b = pipes[i][1];

    if (
      S[a].P !== S[b].P &&
      (S[a].P.well + S[b].P.well) > (Math.min(S[a].P.well, S[b].P.well) + pipes[i][2])
    ) {
      S[a].P.well = Math.min(S[a].P.well, S[b].P.well);
      S[b].P.parent = S[a].P;
      result += pipes[i][2];
    }
  }

  let N = new Set();

  for (let i = 1; i <= n; i++) {
    if (!N.has(S[i].P.id)) {
      result += S[i].P.well;
      N.add(S[i].P.id);
    }
  }

  return result;
};

class Node {
  constructor(id, well) {
    this.parent = null;
    this.id = id;
    this.well = well;
  }

  get P() {
    if (this.parent === null) return this;

    return this.parent.P;
  }
}