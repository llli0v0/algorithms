/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function(n, edges, labels) {
  let tree = {};
  let result = new Array(n);
  for (let i = 0; i < edges.length; i++) {
    let [a, b] = edges[i];
    if (tree[a] === undefined) tree[a] = {};
    if (tree[b] === undefined) tree[b] = {};
    tree[a][b] = b;
    tree[b][a] = a;
  }
  let visited = new Set();
  helper(0);
  return result;

  function helper(node) {
    if (visited.has(node)) return {};
    visited.add(node);
    let count = { [labels[node]]: 1 };
    for (let key in tree[node]) {
      let a = helper(parseInt(key));
      for (let k in a) {
        if (count[k] === undefined) count[k] = 0;
        count[k] += a[k];
      }
    }
    result[node] = count[labels[node]];
    return count;
  }
};
