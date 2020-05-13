/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function(n, edges, hasApple) {
  let root = new Node(0, hasApple[0]);
  buildTree();
  return traverse(root);
  
  function traverse(node) {
    if (node.child.length === 0) {
      if (node.hasApple) return 2;
      return 0;
    }
    let sum = 0;
    for (let i = 0; i < node.child.length; i++) {
      sum += traverse(node.child[i]);
    }
    return sum + (((sum || node.hasApple) && node.val > 0) ? 2 : 0);
  }

  function buildTree() {
    let nodes = {};
    nodes[0] = root;
    for (let i = 1; i < n; i++) {
      nodes[i] = new Node(i, hasApple[i]);
    }
    for (let i = 0; i < edges.length; i++) {
      nodes[edges[i][0]].child.push(nodes[edges[i][1]]);
    }
  }
};

class Node {
  constructor(val, hasApple) {
    this.val = val;
    this.hasApple = hasApple;
    this.child = [];
  }
}