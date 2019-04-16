/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
  let nodes = [], result = true, flipIndex = 0;
  pre(root1);
  preFlip(root2);
  return result && flipIndex === nodes.length;
  function pre(root) {
    if (root === null) return;
    nodes.push([root.val, root.left, root.right]);
    pre(root.left);
    pre(root.right);
  }
  function preFlip(root) {
    if (root === null) return;
    if (
      nodes[flipIndex] === undefined || root.val !== nodes[flipIndex][0] ||
      (!!root.left && !!root.right) !== (!!nodes[flipIndex][1] && !!nodes[flipIndex][2])
    ) result = false;
    flipIndex++;
    if (
      root.left && root.left.val !== nodes[flipIndex][0] ||
      root.left === null && root.right && root.right.val !== nodes[flipIndex][0]
    ) {
      preFlip(root.right);
      preFlip(root.left);
    } else {
      preFlip(root.left);
      preFlip(root.right);
    }
  }
};

class TreeNode{
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
// [0,2,1,9,3,5,7,null,13,4,null,null,11,8,14,null,16,6,null,null,15,18,null,null,null,17,null,10,12,null,null,null,19]
// [0,2,1,null,9,5,7,null,13,11,null,14,8,16,null,null,15,null,null,null,18,null,17,null,null,19,null,3,null,null,null,4,null,null,6,12,10]
let tree1 = new TreeNode(0);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(1);
tree1.left.left = new TreeNode(9);
tree1.left.right = new TreeNode(3);
tree1.right.left = new TreeNode(5);
tree1.right.right = new TreeNode(7);

let tree2 = new TreeNode(0);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(1);
tree2.left.right = new TreeNode(9);
tree2.left.right.right = new TreeNode(3);
tree2.right.left = new TreeNode(5);
tree2.right.right = new TreeNode(7);

console.log(flipEquiv(null, new TreeNode(1)));
