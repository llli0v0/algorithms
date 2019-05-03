/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  p = serialization(p);
  q = serialization(q);
  if (p.length !== q.length) return false;
  for (let i = 0; i < q.length; i++) {
    if (p[i] !== q[i]) return false;
  }
  return true;
  function serialization(root) {
    if (!root) return [];
    let res = [root.val];
    let nodes = [root];
    let next = [];
    while (nodes.length) {
      let node = nodes.shift();
      if (node.left) {
        res.push(node.left.val);
        next.push(node.left);
      } else {
        res.push(null);
      }
      if (node.right) {
        res.push(node.right.val);
        next.push(node.right);
      } else {
        res.push(null);
      }
      if (!nodes.length) {
        nodes = next;
        next = [];
      }
    }
    return res;
  }
};