/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
var constructFromPrePost = function(pre, post) {
  if (!pre.length) return null;
  let root = new TreeNode(pre[0]);
  if (pre.length === 1) return root;
  let m = post.indexOf(pre[1]);
  let n = pre.indexOf(post[post.length - 2]);
  let leftPre = pre.slice(1, n);
  let leftPost = post.slice(0, m + 1);
  let rightPre = pre.slice(n);
  let rightPost = post.slice(m + 1, post.length - 1);
  if (leftPre.length && rightPre.length) {
    root.left = constructFromPrePost(leftPre, leftPost);
    root.right = constructFromPrePost(rightPre, rightPost);
  } else {
    root.right = constructFromPrePost(leftPre.length ? leftPre : rightPre, leftPost ? leftPost : rightPost);
  }
  return root;
};