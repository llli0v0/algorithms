/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  return helper(nums);

  function helper(nums) {
    if (!nums.length) return null;

    let m = Math.floor(nums.length / 2);

    let node = new TreeNode(nums[m]);

    node.left = helper(nums.slice(0, m));
    node.right = helper(nums.slice(m + 1));

    return node;
  }
};