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
var rob = function(root) {
  if (!root) return 0;
  return Math.max(
    root.val + helper(root.left, false) + helper(root.right, false),
    helper(root.left, true) + helper(root.right, true)
  );
  function helper(root, s) {
    if (!root) return 0;
    if (s) {
      return Math.max(
        root.val + helper(root.left, false) + helper(root.right, false),
        helper(root.left, true) + helper(root.right, true)
      );
    }
    return helper(root.left, true) + helper(root.right, true);
  }
};