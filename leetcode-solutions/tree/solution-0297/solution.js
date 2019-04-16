/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (!root) return [];
  let next = [root.left, root.right];
  let result = [root.val];
  while (next.length) {
    let nextNext = [];
    for (let i = 0; i < next.length; i++) {
      if (next[i] === null) {
        result.push(null);
        continue;
      }
      result.push(next[i].val);
      nextNext.push(next[i].left, next[i].right);
    }
    next = nextNext;
  }
  return result;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (data.length === 0) return null;
  let root = new TreeNode(data[0]);
  let currentValid = [root];
  let nodeUsed = 1;
  while (currentValid.length) {
    let next = data.slice(nodeUsed, nodeUsed + 2 * currentValid.length);
    let nextValid = [];
    for (let i = 0; i < currentValid.length; i++) {
      if (next[i * 2] === null) {
        currentValid[i].left = null;
      } else {
        currentValid[i].left = new TreeNode(next[i * 2]);
        nextValid.push(currentValid[i].left);
      }
      if (next[i * 2 + 1] === null) {
        currentValid[i].right = null;
      } else {
        currentValid[i].right = new TreeNode(next[i * 2 + 1]);
        nextValid.push(currentValid[i].right);
      }
    }
    nodeUsed += next.length;
    currentValid = nextValid;
  }
  return root;
};

module.exports = { solution: { serialize, deserialize } };
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */