/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function(root, start) {
  let res = 0;
  helper(root);
  let visited = new Set();
  helper2(start, 0);
  return res;

  function helper2(node, time) {
    if (!node) {
      return res = Math.max(res, time - 1);
    }
    if (visited.has(node.val)) return;
    visited.add(node.val);
    helper2(node.left, time + 1);
    helper2(node.right, time + 1);
    helper2(node.parent, time + 1);
  }

  function helper(node) {
    if (node === null) return;
    if (node.left) node.left.parent = node;
    if (node.right) node.right.parent = node;
    if (node.val === start) start = node;
    helper(node.left);
    helper(node.right);
  }
};
