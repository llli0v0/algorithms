/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} s
 * @return {TreeNode}
 */
var str2tree = function(s) {
  return helper(s);
  
  function helper(s) {
    if (!s || s === '()') return null;
    let a;
    let i = 0;
    while (s[i] && s[i] !== '(') i++;
    a = s.slice(0, i);
    s = s.slice(i);
    let node = new TreeNode(parseInt(a));
    if (s) {
      let b = 1;
      i = 1;
      while (b > 0) {
        if (s[i] === '(') b++;
        if (s[i] === ')') b--;
        i++;
      }
      node.left = helper(s.slice(1, i - 1));
      node.right = helper(s.slice(i + 1, s.length - 1));
    }
    return node;
  }
};