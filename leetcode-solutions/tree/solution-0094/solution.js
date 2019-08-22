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
var inorderTraversal = function(root) {
  let result = [];

  helper(root);

  return result;

  function helper(node) {
    if (!node) return;

    helper(node.left);
    result.push(node.val);
    helper(node.right);
  }
};