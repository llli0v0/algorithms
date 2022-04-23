/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
var longestPath = function(parent, s) {
  let nodeMap = {};
  for (let i = 0; i < parent.length; i++) {
    nodeMap[i] = new Node(s[i]);
  }
  let root = nodeMap[0];
  for (let i = 1; i < parent.length; i++) {
    let p = nodeMap[parent[i]];
    p.children.push(nodeMap[i]);
  }
  let result = 1;
  helper(root);
  return result;

  function helper(node) {
    let children = node.children;
    if (children.length === 0) return 1;
    let lens = [];
    for (let i = 0; i < children.length; i++) {
      let len = helper(children[i]);
      if (node.val !== children[i].val) {
        lens.push(len);
      }
    }
    if (!lens.length) return 1;
    lens.sort((a, b) => b - a);
    result = Math.max(result, lens.length > 1 ? lens[0] + lens[1] + 1 : lens[0] + 1);
    return lens[0] + 1;
  }
};

class Node {
  constructor(val) {
    this.val = val;
    this.children = [];
  }
}