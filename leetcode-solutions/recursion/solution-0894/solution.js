/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} N
 * @return {TreeNode[]}
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
var allPossibleFBT = function(N) {
  if (N === 0) return [];
  if (N - 1 === 0) return [new TreeNode(0)];
  let leftCount = 1;
  let rightCount = N - 1 - leftCount;
  let res = [];
  while (rightCount > 0) {
    let leftTrees = allPossibleFBT(leftCount);
    let rightTrees = allPossibleFBT(rightCount);
    for (let i = 0; i < leftTrees.length; i++) {
      for (let j = 0; j < rightTrees.length; j++) {
        let root = new TreeNode(0);
        root.left = leftTrees[i];
        root.right = rightTrees[j];
        res.push(root);
      }
    }
    leftCount += 2;
    rightCount = N - 1 - leftCount;
  }
  return res;
};