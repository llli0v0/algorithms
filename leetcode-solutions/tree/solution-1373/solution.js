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
var maxSumBST = function(root) {
  let result = 0;

  helper(root);

  return result;

  function helper(node) {
    if (node === null) return [0, true];

    let left = helper(node.left);
    let right = helper(node.right);

    if (left[1] && right[1] && (node.left === null || node.val > node.left.val) && (node.right === null || node.val < node.right.val)) {
      let val = left[0] + node.val + right[0];

      result = Math.max(result, val);
      return [val, true];
    } else {
      return [0, false];
    }
  }
};