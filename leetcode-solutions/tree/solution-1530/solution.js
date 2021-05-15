/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} distance
 * @return {number}
 */
var countPairs = function(root, distance) {
  let leafs = [];
  postOrder(root);
  let result = 0;
  for (let i = 0; i < leafs.length; i++) {
    for (let j = i + 1; j < leafs.length; j++) {
      let parent = leafs[j].parent;
      let dep = 1;
      while (!parent.leafsSet.has(leafs[i].val)) {
        parent = parent.parent;
        dep++;
      }
      let iparent = leafs[i].parent;
      dep++;
      while (!iparent.leafsSet.has(leafs[j].val)) {
        iparent = iparent.parent;
        dep++;
      }
      if (dep <= distance) result++;
    }
  }
  return result;

  function postOrder(node) {
    if (!node) return [];
    if (!node.left && !node.right) {
      node.val = Math.floor(Math.random()*(1 << 31));
      leafs.push(node);
      return [node];
    }
    node.left && (node.left.parent = node);
    node.right && (node.right.parent = node);
    node.leafs = postOrder(node.left).concat(postOrder(node.right));
    node.leafsSet = new Set(node.leafs.map(item => item.val));
    return node.leafs;
  }
};