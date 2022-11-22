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
 * @param {number[]} queries
 * @return {number[][]}
 */
var closestNodes = function(root, queries) {
  let arr = [];
  helper(root);
  arr.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < queries.length; i++) {
    let q = queries[i];
    if (arr[0] > q) res.push([-1, arr[0]]);
    else if (q > arr[arr.length - 1]) res.push([arr[arr.length - 1], -1]);
    else {
      let l = 0;
      let r = arr.length - 1;
      while (l < r) {
        let m = Math.floor((l + r) / 2);
        if (arr[m] < q) {
          l = m + 1;
        } else {
          r = m;
        }
      }
      if (arr[l] === q) res.push([arr[l], arr[l]]);
      else {
        res.push([arr[l - 1], arr[l]]);
      }
    }
  }
  return res;

  function helper(node) {
    if (!node) return;
    arr.push(node.val);
    helper(node.left);
    helper(node.right);
  }
};
