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
 * @return {number}
 */
var deepestLeavesSum = function(root) {
  let maxDeep = -1;
  let result = 0;
  helper(root);
  return result;
  
  function helper(node, deep = 0) {
    if (!node) return;
    if (deep > maxDeep) {
      maxDeep = deep;
      result = node.val;
    } else if (deep === maxDeep) {
      result += node.val;
    }
    helper(node.left, deep + 1);
    helper(node.right, deep + 1);
  }
};