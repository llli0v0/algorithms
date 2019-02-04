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
var maxPathSum = function(root) {
  let currentMax;
  function traverse(currentRoot) {
    if (currentRoot === null) return;
    let leftMax = traverse(currentRoot.left);
    let rightMax = traverse(currentRoot.right);
    (leftMax < 0 || leftMax === undefined) && (leftMax = 0);
    (rightMax < 0 || rightMax === undefined) && (rightMax = 0);
    let current;
    let crossCurrentRoot = currentRoot.val + leftMax + rightMax;
    let bigger = leftMax > rightMax ? leftMax : rightMax;
    current = currentRoot.val + bigger;
    (crossCurrentRoot > currentMax || currentMax === undefined) && (currentMax = crossCurrentRoot);
    (current > currentMax) && (currentMax = current);
    return current;
  }
  traverse(root);
  return currentMax;
};

module.exports = { solution: maxPathSum };