/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  let watcher = [];
  let errorNode = [];
  function insertWatchTarget(node) {
    if (watcher.length < 2) {
      watcher.push(node);
      if (watcher.length === 2) check();
    } else {
      watcher.shift();
      watcher.push(node);
      check();
    }
    function check() {
      if (watcher[0].val > watcher[1].val) errorNode.push([...watcher]);
    }
  }
  function MorrisTraversal(root) {
    let current = root;
    while (current !== null) {
      if (current.left === null) {
        insertWatchTarget(current);
        current = current.right;
      } else {
        let pre = current.left;
        while (pre.right !== null && pre.right !== current) {
          pre = pre.right;
        }
        if (pre.right === null) {
          pre.right = current;
          current = current.left;
        } else {
          insertWatchTarget(current);
          pre.right = null;
          current = current.right;
        }
      }
    }
  }
  function swap(node1, node2) {
    let temp = node1.val;
    node1.val = node2.val;
    node2.val = temp;
  }
  MorrisTraversal(root);
  if (errorNode.length === 1) {
    swap(...errorNode[0]);
  } else {
    swap(errorNode[0][0], errorNode[1][1]);
  }
};