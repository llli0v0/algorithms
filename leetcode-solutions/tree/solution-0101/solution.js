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
var isSymmetric = function(root) {
  if (!root) return true;
  if (!root.left && !root.right) return true;
  if (
    !root.left && root.right ||
    root.left && !root.right ||
    root.left.val !== root.right.val
  ) return false;
  return helper(root.left, root.right);

  function helper(node1, node2) {
    if (!node1 || !node2) {
      if (!node1 && !node2) return true;
      return false;
    }
    if (node1.val !== node2.val) return false;
    if (
      node1.left && node1.right &&
      node2.left && node2.right &&
      (node1.left.val !== node2.right.val || node1.right.val !== node2.left.val)
    ) return false;
    return helper(node1.left, node2.right) && helper(node1.right, node2.left);
  }
};