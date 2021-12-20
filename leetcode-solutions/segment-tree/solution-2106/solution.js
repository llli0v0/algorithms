/**
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
var maxTotalFruits = function(fruits, startPos, k) {
  let tree = new SegmentTree(fruits);
  let result = 0;
  for (let i = 0; i <= fruits[fruits.length - 1][0]; i++) {
    if (startPos - i > k) continue;
    else if (i - startPos > k) continue;
    else if (i <= startPos && k - (startPos - i) * 2 <= 0) {
      result = Math.max(result, getVal(i, startPos));
    } else if (i <= startPos && k - (startPos - i) * 2 > 0) {
      result = Math.max(result, getVal(i, startPos + k - (startPos - i) * 2));
    } else if (i >= startPos && k - (i - startPos) * 2 <= 0) {
      result = Math.max(result, getVal(startPos, i));
    } else if (i >= startPos && k - (i - startPos) * 2 > 0) {
      result = Math.max(result, getVal(startPos - (k - (i - startPos) * 2), i));
    }
  }
  return result;

  function getVal(L, R, node = tree.root) {
    if (L > R) return 0;
    if (L <= node.L && node.R <= R) {
   return node.val;
  }
    let val = 0;
    let left = node.left;
    let right = node.right;
    if (left) val += getVal(L, Math.min(left.R, R), left);
    if (right) val += getVal(Math.max(right.L, L), R, right);
    return val;
  }
};

class SegmentTree {
  constructor(arr) {
    this.root = this.init(arr);
  }

  init(arr) {
    if (!arr.length) return null;
    else if (arr.length === 1) {
      let node = new Node(arr[0][1]);
      node.L = arr[0][0];
      node.R = arr[0][0];
      return node;
    }
    let node = new Node();
    let m = Math.floor(arr.length / 2);
    node.left = this.init(arr.slice(0, m));
    node.right = this.init(arr.slice(m));
    node.val = node.left.val + node.right.val;
    node.L = node.left.L;
    node.R = node.right.R;
    if (this.root === null) this.root = node;
    return node;
  }
}

class Node {
  constructor(val = 0) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.L = 0;
    this.R = 0;
  }
}