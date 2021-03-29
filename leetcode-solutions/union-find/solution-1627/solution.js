/**
 * @param {number} n
 * @param {number} threshold
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var areConnected = function(n, threshold, queries) {
  let unionFind = {};
  for (let i = threshold + 1; i <= n; i++) {
    if (unionFind[i] === undefined) unionFind[i] = new Node(i);
    let e = 2;
    while (e * i <= n) {
      let a = e * i;
      if (unionFind[a] === undefined) unionFind[a] = new Node(a);
      if (unionFind[a].host !== unionFind[i].host) unionFind[a].host.parent = unionFind[i].host;
      e++;
    }
  }
  let result = [];
  for (let i = 0; i < queries.length; i++) {
    let q = queries[i];
    if (unionFind[q[0]] === undefined || unionFind[q[1]] === undefined) result.push(false);
    else if (unionFind[q[0]].host === unionFind[q[1]].host) result.push(true);
    else result.push(false);
  }
  return result;
};

class Node {
  constructor(val) {
    this.val = val;
    this.parent = null;
  }

  get host() {
    if (this.parent === null) return this;
    return this.parent.host;
  }
}