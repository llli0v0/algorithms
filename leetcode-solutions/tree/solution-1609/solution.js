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
 * @return {boolean}
 */
var isEvenOddTree = function(root) {
  let map = {};
  let result = true;
  helper(root, 0);
  return result;

  function helper(node, deep) {
    if (node === null) return;
    if (map[deep] === undefined) map[deep] = [];
    if (deep % 2) {
      if (map[deep].length && node.val >= map[deep][map[deep].length - 1] || node.val % 2) result = false;
    } else {
      if (map[deep].length && node.val <= map[deep][map[deep].length - 1] || !(node.val % 2)) result = false;
    }
    map[deep].push(node.val);
    helper(node.left, deep + 1);
    helper(node.right, deep + 1);
  }
};