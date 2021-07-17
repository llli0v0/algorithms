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
 * @param {number} limit
 * @return {TreeNode}
 */
var sufficientSubset = function(root, limit) {
  return helper(root, limit);

  function helper(root, limit) {
    if (!root) return null;
    if (!root.left && !root.right) return root.val < limit ? null : root;
    root.left = helper(root.left, limit - root.val);
    root.right = helper(root.right, limit - root.val);
    if (!root.left && !root.right) {
      return null;
    } else {
      return root;
    }
  }
};
