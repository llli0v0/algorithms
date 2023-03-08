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
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function(root, k) {
  let vals = [];
  helper(root, 0);
  if (vals.length < k) return -1;
  return vals.sort((a, b) => b - a)[k - 1];

  function helper(node, deep) {
    if (!node) return;
    vals[deep] = (vals[deep] ?? 0) + node.val;
    helper(node.left, deep + 1);
    helper(node.right, deep + 1);
  }
};
