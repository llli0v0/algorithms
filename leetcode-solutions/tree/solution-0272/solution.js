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
 * @param {number} k
 * @return {number[]}
 */
var closestKValues = function(root, target, k) {
  let A = [];
  helper(root);
  A = A.sort((a, b) => a[0] - b[0]);
  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(A[i][1]);
  }
  return result;

  function helper(root) {
    if (!root) return;
    A.push([Math.abs(root.val - target), root.val]);
    helper(root.left);
    helper(root.right);
  }
};