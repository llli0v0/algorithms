/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} voyage
 * @return {number[]}
 */
var flipMatchVoyage = function(root, voyage) {
  let point = 0;
  let result = [];
  let preOrderResult = [];
  function preOrder(root) {
    if (root === null) return;
    if (root.left && root.left.val !== voyage[point + 1]) {
      result.push(root.val);
      preOrderResult.push(root.val);
      point += 1;
      preOrder(root.right);
      preOrder(root.left);
    } else {
      preOrderResult.push(root.val);
      point += 1;
      preOrder(root.left);
      preOrder(root.right)
    }
  }
  preOrder(root);
  for (let i = 0; i < voyage.length; i++) {
    if (preOrderResult[i] !== voyage[i]) return [-1];
  }
  return result;
};

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

let tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.left.left = new TreeNode(3);

console.log(flipMatchVoyage(tree, [1, 2, 3]));