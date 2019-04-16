/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
  if (root === null) return null;
  function connectNext(subRoot) {
    let currentLeft = subRoot.left;
    let currentRight = subRoot.right;
    while (currentLeft && currentRight) {
      currentLeft.next = currentRight;
      currentLeft = currentLeft.right;
      currentRight = currentRight.left;
    }
    subRoot.left && connectNext(subRoot.left);
    subRoot.right && connectNext(subRoot.right);
  }
  connectNext(root);
  return root;
};

module.exports = { solution: connect };