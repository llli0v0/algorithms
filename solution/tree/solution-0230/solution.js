/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let c = 0, result;
  inOrder(root);
  return result;
  function inOrder(root) {
    if (root === null) return;
    inOrder(root.left);
    c++;
    if (c === k) result = root.val;
    inOrder(root.right);
  }
};