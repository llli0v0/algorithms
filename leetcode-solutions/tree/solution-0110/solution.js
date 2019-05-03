/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  let result = true;
  postOrder(root);
  return result;
  function postOrder(root) {
    if (root === null) return 0;
    let leftHeight = postOrder(root.left);
    let rightHeight = postOrder(root.right);
    if (Math.abs(leftHeight - rightHeight) > 1) result = false;
    return Math.max(leftHeight, rightHeight) + 1;
  }
};