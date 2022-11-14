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
 * @return {number}
 */
var minimumOperations = function(root) {
  let cur = [root];
  let next = [];
  let res = 0;
  while (cur.length) {
    let arr = [];
    for (let i = 0; i < cur.length; i++) {
      arr.push(cur[i].val);
    }
    arr.sort((a, b) => a - b);
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
      map.set(arr[i], i);
    }
    let index = 0;
    while (index < cur.length) {
      let item = cur[index];
      if (map.get(item.val) !== index) {
        let a = item;
        let b = cur[map.get(item.val)];
        [a.val, b.val] = [b.val, a.val];
        res++;
      } else {
        if (item.left) next.push(item.left);
        if (item.right) next.push(item.right);
        index++;
      }
    }
    cur = next;
    next = [];
  }
  return res;
};
