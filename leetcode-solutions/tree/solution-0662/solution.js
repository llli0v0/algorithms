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
var widthOfBinaryTree = function(root) {
  let result = 1;
  breadthTraversal(root);
  return result;
  function breadthTraversal(root) {
    let nodes = [root];
    let next = [];
    while (nodes.length) {
      let node = nodes.shift();
      if (typeof node === 'number') {
        next.push(node + 1);
      } else {
        next.push(node.left ? node.left : 1);
        next.push(node.right ? node.right : 1);
      }
      if (nodes.length === 0) {
        trim(next);
        let width = 0;
        for (let i = 0; i < next.length; i++) {
          if (next[i] instanceof TreeNode) {
            width++;
          } else {
            width += 2 ** (next[i] - 1);
          }
        }
        result = Math.max(result, width);
        nodes = next;
        next = [];
      }
    }
  }
  function trim(arr) {
    while (arr.length && (typeof arr[0] === 'number' || typeof arr[arr.length - 1] === 'number')) {
      if (typeof arr[0] === 'number') arr.shift();
      if (typeof arr[arr.length - 1] === 'number') arr.pop();
    }
  }
};