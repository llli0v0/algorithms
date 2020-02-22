/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {
  helper(root);

  if (root.val === target && root.left === null && root.right === null) return null;
  return root;

  function helper(node) {
    if (node === null) return;

    node.left && (node.left.parent = node);
    node.right && (node.right.parent = node);

    helper(node.left);
    helper(node.right);

    if (node.left === null && node.right === null && node.val === target && node.parent) {
      if (node.parent.left === node) {
        node.parent.left = null;
      } else {
        node.parent.right = null;
      }
    }
  }
};