/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  let trees = new Set();
  let result = [];
  postOrder(root);
  return result.map(i => i.node);
  function postOrder(root) {
    if (!root) return;
    postOrder(root.left);
    postOrder(root.right);
    let treeStr = stringify(root);
    if (trees.has(treeStr) && result.every(i => i.str !== treeStr)) {
      result.push({ node: root, str: treeStr });
    }
    trees.add(treeStr);
  }
  function stringify(root) {
    let result = [];
    let nodes = [root];
    let next = [];
    while (nodes.length) {
      let node = nodes.shift();
      if (node) {
        next.push(node.left);
        next.push(node.right);
        result.push(node.val);
      } else {
        result.push('null');
      }
      if (!nodes.length) {
        nodes = next;
        next = [];
      }
    }
    return result.join(',');
  }
};