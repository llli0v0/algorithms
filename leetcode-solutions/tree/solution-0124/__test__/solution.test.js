const { solution } = require('../solution');

describe('it should find the max path sum', () => {
  it('should find the max path sum', () => {
    class TreeNode {
      constructor(val) {
        this.val = val;
        this.left = this.right = null;
      }
    }
    let tree = new TreeNode(5);
    tree.left = new TreeNode(4);
    tree.right = new TreeNode(8);
    tree.left.left = new TreeNode(11);
    tree.left.left.left = new TreeNode(7);
    tree.left.left.right = new TreeNode(2);
    tree.right.left = new TreeNode(13);
    tree.right.right = new TreeNode(4);
    tree.right.right.right = new TreeNode(1);
    expect(solution(tree)).toBe(48);
  });
});