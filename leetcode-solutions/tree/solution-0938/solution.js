/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
  let sum = 0;
  postOrder(root);
  return sum;
  function postOrder(root) {
    if (!root) return;
    postOrder(root.left);
    if (root.val >= L && root.val <= R) sum += root.val;
    postOrder(root.right);
  }
};