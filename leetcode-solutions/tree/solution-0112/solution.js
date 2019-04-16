/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (!root) return false;
  let result = false;
  pre(root);
  return result;
  function pre(root) {
    sum -= root.val;
    if (sum === 0 && root.left === null && root.right === null) result = true;
    if (root.left) {
      pre(root.left);
      sum += root.left.val;
    }
    if (root.right) {
      pre(root.right);
      sum += root.right.val;
    }
  }
};