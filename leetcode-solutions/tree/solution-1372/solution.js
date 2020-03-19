/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function(root) {
  let result = 0;

  helper(root);

  return result;

  function helper(node) {
    if (node === null) return;

    helper(node.left);
    helper(node.right);

    if (node.left === null) {
      node.L = 0;
    } else {
      node.L = 1 + node.left.R;
    }

    if (node.right === null) {
      node.R = 0;
    } else {
      node.R = 1 + node.right.L;
    }

    result = Math.max(result, node.L, node.R);
  }
};