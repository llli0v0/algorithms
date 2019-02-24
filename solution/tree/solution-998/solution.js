/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoMaxTree = function(root, val) {
  function post(root) {
    if (root === null) return [];
    let leftArr = post(root.left);
    let rightArr = post(root.right);
    return leftArr.concat([root.val].concat(rightArr));
  }
  let A = post(root);
  A.push(val);
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
  return build(A);
};

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this. right = null;
  }
}

let tree = new TreeNode(4);
tree.left = new TreeNode(1);
tree.right = new TreeNode(3);
tree.right.left = new TreeNode(2);

console.log(insertIntoMaxTree(tree, 5));