/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
  let resMap = {}, allCase = [], ans = [];
  function inOrder(root, x, y) {
    if (root === null) return;
    inOrder(root.left, x - 1, y - 1);
    resMap[x] === undefined && (resMap[x] = []);
    resMap[x].push({ val: root.val, y: y });
    inOrder(root.right, x + 1, y - 1);
  }
  inOrder(root, 0, 0);
  allCase = Object.keys(resMap).sort((a, b) => a - b);
  for (let i = 0; i < allCase.length; i++) {
    ans.push(resMap[allCase[i]].sort((a, b) => {
      if (b.y === a.y) return a.val - b.val;
      return b.y - a.y;
    }).map(i => i.val));
  }
  return ans;
};