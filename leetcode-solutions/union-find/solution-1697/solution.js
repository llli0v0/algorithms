/**
 * @param {number} n
 * @param {number[][]} edgeList
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var distanceLimitedPathsExist = function(n, edgeList, queries) {
  for (let i = 0; i < queries.length; i++) queries[i].push(i);
  edgeList.sort((a, b) => a[2] - b[2]);
  queries.sort((a, b) => a[2] - b[2]);
  let edgeListIndex = 0;
  let unionFind = {};
  let result = new Array(queries.length).fill(false);
  for (let i = 0; i < queries.length; i++) {
    let q = queries[i];
    while (edgeListIndex < edgeList.length && edgeList[edgeListIndex][2] < q[2]) {
      let edge = edgeList[edgeListIndex];
      let a = unionFind[edge[0]];
      let b = unionFind[edge[1]];
      if (a === undefined) a = unionFind[edge[0]] = new Node(edge[0]);
      if (b === undefined) b = unionFind[edge[1]] = new Node(edge[1]);
      if (a.host !== b.host) {
        b.host.distanceToParent = edge[2];
        b.host.parent = a.host;
      }
      edgeListIndex++;
    }
    if (unionFind[q[0]] && unionFind[q[1]] && unionFind[q[0]].host === unionFind[q[1]].host) result[q[3]] = true;
  }
  return result;
};

class Node {
  constructor(key) {
    this.key = key;
    this.parent = null;
    this.distanceToParent = 0;
  }

  get host() {
    if (this.parent === null) return this;
    return this.parent.host;
  }
}