/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var FindElements = function(root) {
  root.val = 0;
  this.init(root);
  this.root = root;
};

FindElements.prototype.init = function(node) {
  if (node.left) {
    node.left.val = node.val * 2 + 1;
    this.init(node.left);
  }
  if (node.right) {
    node.right.val = node.val * 2 + 2;
    this.init(node.right);
  }
}

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target, node = this.root) {
  if (!node) return false;
  if (node.val === target) return true;
  return this.find(target, node.left) || this.find(target, node.right);
};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */