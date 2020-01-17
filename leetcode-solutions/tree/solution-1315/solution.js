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
var sumEvenGrandparent = function(root) {
  let result = 0;

  helper(root);

  return result;

  function helper(node) {
    if (node === null) return;

    if (node.left) node.left.parent = node;
    if (node.right) node.right.parent = node;

    if (node.parent && node.parent.parent && node.parent.parent.val % 2 === 0) result += node.val;

    helper(node.left);
    helper(node.right);
  }
};