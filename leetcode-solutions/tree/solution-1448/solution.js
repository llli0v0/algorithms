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
 * @return {number}
 */
var goodNodes = function(root) {
  let result = 0;
  traverse(root, root.val);
  return result;

  function traverse(node, max) {
    if (node === null) return;
    if (node.val >= max) {
      result++;
      max = node.val;
    }
    traverse(node.left, max);
    traverse(node.right, max);
  }
};