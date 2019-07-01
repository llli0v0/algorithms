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
var minCameraCover = function(root) {
  let ans = 0;
  function post(node) {
    if (node === null) return;
    post(node.left);
    post(node.right);
    if (node !== root && node.left === null && node.right === null) {
      node.val = -2;
    } else if (
      node.left && (node.left.val === -2 || node.left.val === 0) ||
      node.right && (node.right.val === -2 || node.right.val === 0) ||
      node === root && (
        (node.left === null || node.left.val !== 1) && (node.right === null || node.right.val !== 1)
      )
    ) {
      node.val = 1;
      ans++;
    } else if (node.left && node.left.val === 1 || node.right && node.right.val === 1) {
      node.val = -1;
    }
  }
  post(root);
  return ans;
};

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let tree = new TreeNode(0);
tree.left = new TreeNode(0);
tree.left.left = new TreeNode(0);
tree.left.left.left = new TreeNode(0);

console.log(minCameraCover(tree));