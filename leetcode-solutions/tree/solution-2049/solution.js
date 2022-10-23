/**
 * @param {number[]} parents
 * @return {number}
 */
var countHighestScoreNodes = function(parents) {
  let nodeMap = {};
  for (let i = 1; i < parents.length; i++) {
    nodeMap[i] = nodeMap[i] ?? (new Node(i));
    let parent = (nodeMap[parents[i]] = nodeMap[parents[i]] ?? (new Node(parents[i])));
    if (!parent.left) {
      parent.left = nodeMap[i];
    } else {
      parent.right = nodeMap[i];
    }
  }
  let root = nodeMap[0];
  let res = 0;
  let max = 0;
  helper(root);
  return res;

  function helper(node) {
    if (!node) return;
    helper(node.left);
    helper(node.right);
    let lc = node.left ? node.left.count : 0;
    let rc = node.right ? node.right.count : 0;
    let c = (lc || 1) * (rc || 1) * ((parents.length - lc - rc - 1) || 1);
    if (c === max) res++;
    else if (c > max) {
      max = c;
      res = 1;
    }
    node.count += lc + rc;
  }
};

class Node {
  constructor(index) {
    this.index = index;
    this.count = 1;
    this.left = this.right = null;
  }
}
