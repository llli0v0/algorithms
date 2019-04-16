/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  if (!root) return [];
  let result = [];
  pre(root, '' + root.val);
  return result;
  function pre(root, S) {
    sum -= root.val;
    if (sum === 0 && root.left === null && root.right === null) result.push(S.split('_').map(i => parseInt(i)));
    if (root.left) {
      pre(root.left, S + '_' + root.left.val);
      sum += root.left.val;
    }
    if (root.right) {
      pre(root.right, S + '_' + root.right.val);
      sum += root.right.val;
    }
  }
};