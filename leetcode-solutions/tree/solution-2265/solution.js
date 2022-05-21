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
var averageOfSubtree = function(root) {
  let result = 0;
  helper(root);
  return result;

  function helper(node) {
    if (!node) return [0, 0];
    let [count1, sum1] = helper(node.left);
    let [count2, sum2] = helper(node.right);
    if (Math.floor((sum1 + sum2 + node.val) / (count1 + count2 + 1)) === node.val) result++;
    return [count1 + count2 + 1, sum1 + sum2 + node.val];
  }
};