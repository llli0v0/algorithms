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
var maximumAverageSubtree = function(root) {
  let result = 0;

  helper(root);

  return result;
  
  function helper(node) {
    if (node === null) return [0, 0];

    let L = helper(node.left);
    let R = helper(node.right);

    let s = node.val + L[0] + R[0];
    let c = 1 + L[1] + R[1];

    result = Math.max(result, s / c);

    return [s, c];
  }
};