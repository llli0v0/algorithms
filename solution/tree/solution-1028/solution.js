/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
class TreeNode{
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
var recoverFromPreorder = function(S) {
  if (!S) return null;
  S = S.split('');
  let stack = [];
  let nodes = [];
  while (S.length) {
    let t = S.shift();
    if (t === '-' && stack[stack.length - 1] !== '-' || S.length === 0) {
      if (S.length === 0) {
        if (stack[stack.length - 1] === '-' || stack.length === 0) {
          stack.push(t);
        } else {
          stack[stack.length - 1] = stack[stack.length - 1] + t;
        }
      }
      nodes.push({ height: stack.length - 1, val: parseInt(stack[stack.length - 1]) });
      stack = [];
      stack.push('-');
    } else {
      if (stack.length === 0 || stack[stack.length - 1] === '-') {
        stack.push(t);
      } else {
        stack[stack.length - 1] += t;
      }
    }
  }
  let root = new TreeNode(nodes.shift().val);
  treeNodes = { 0: root };
  while (nodes.length) {
    let node = nodes.shift();
    if (treeNodes[node.height - 1].left === null) {
      treeNodes[node.height - 1].left = new TreeNode(node.val);
      treeNodes[node.height] = treeNodes[node.height - 1].left;
    } else {
      treeNodes[node.height - 1].right = new TreeNode(node.val);
      treeNodes[node.height] = treeNodes[node.height - 1].right;
    }
  }
  return root;
};

recoverFromPreorder("1-2--3---4-5--6---7");