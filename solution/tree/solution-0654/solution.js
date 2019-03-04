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
var constructMaximumBinaryTree = function(nums) {
  class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  function build(nums) {
    if (nums.length === 0) return null;
    let maxVal = 0, maxIndex = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > maxVal) {
        maxVal = nums[i];
        maxIndex = i;
      }
    }
    let node = new TreeNode(maxVal);
    node.left = build(nums.slice(0, maxIndex));
    node.right = build(nums.slice(maxIndex + 1));
    return node;
  }
  return build(nums);
};