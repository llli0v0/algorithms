/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
  if (!root) return [];
  let hash = {};
  postorder(root);
  let times = {}, maxTimes = 0;
  for (let key in hash) {
    if (times[hash[key]] === undefined) {
      times[hash[key]] = [];
    }
    times[hash[key]].push(key);
    if (hash[key] > maxTimes) maxTimes = hash[key];
  }
  return times[maxTimes].map(i => parseInt(i));
  function postorder(node) {
    if (!node) return 0;
    let left = postorder(node.left);
    let right = postorder(node.right);
    let sum = node.val + left + right;
    if (hash[sum] === undefined) {
      hash[sum] = 0;
    }
    hash[sum] += 1;
    return sum;
  }
};

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let tree = new TreeNode(5);
tree.left = new TreeNode(2);
tree.right = new TreeNode(-3);

console.log(findFrequentTreeSum(tree));