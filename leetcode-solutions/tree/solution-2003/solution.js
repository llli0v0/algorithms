/**
 * @param {number[]} parents
 * @param {number[]} nums
 * @return {number[]}
 */
var smallestMissingValueSubtree = function(parents, nums) {
  let root = new Node(0, nums[0]);
  let nodeMap = new Map([[0, root]]);
  let valMap = new Map([[nums[0], root]]);
  for (let i = 1; i < parents.length; i++) {
    if (!nodeMap.has(i)) {
      let node = new Node(i, nums[i]);
      nodeMap.set(i, node);
      valMap.set(nums[i], node);
    }
    let node = nodeMap.get(i);
    let p = parents[i];
    if (!nodeMap.has(p)) {
      let pNode = new Node(p, nums[p]);
      nodeMap.set(p, pNode);
      valMap.set(nums[p], pNode);
    }
    let pNode = nodeMap.get(p);
    node.parent = pNode;
    pNode.children.push(node);
  }
  let res = new Array(parents.length);
  for (let i = 1; i <= 100001; i++) {
    let node = valMap.get(i) || root;
    let nodo;
    while (node) {
      let child = node.children;
      for (let j = 0; j < child.length; j++) {
        if (child[j] !== nodo) {
          if (!node.done) helper(child[j], i);
        }
      }
      if (node && node.doneAsParent) break;
      node && (node.doneAsParent = true);
      nodo = node;
      node = node.parent;
    }
    if (!valMap.has(i)) {
      res[root.key] = i;
      break;
    }
  }
  return res;

  function helper(node, val) {
    if (node.done) return;
    res[node.key] = val
    node.done = true;
    let child = node.children;
    for (let i = 0; i < child.length; i++) {
      helper(child[i], val);
    }
  }
};

class Node {
  constructor(key, val) {
    this.parent = null;
    this.key = key;
    this.val = val;
    this.children = [];
    this.done = false;
    this.doneAsParent = false;
  }
}
