/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (!root) return [];
  let nodes = [root];
  let next = [], result = [];
  while (nodes.length) {
    if (nodes.length === 1) {
      result.push(nodes[0].val);
    }
    node = nodes.shift();
    if (node.left) next.push(node.left);
    if (node.right) next.push(node.right);
    if (!nodes.length) {
      nodes = [...next];
      next = [];
    }
  }
  return result;
};