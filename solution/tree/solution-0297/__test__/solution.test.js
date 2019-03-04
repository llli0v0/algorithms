const { solution } = require('../solution');

describe('it should serialize and deserialize a tree', () => {
  it('should serialize and deserialize a tree', () => {
    class TreeNode {
      constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
      }
    }
    let root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);
    root.left.right.left = new TreeNode(8);
    root.left.right.left.right = new TreeNode(10);
    root.right.left.right = new TreeNode(9);
    root.right.left.right.left = new TreeNode(11);
    expect(solution.serialize(solution.deserialize(solution.serialize(root))).toString()).toBe(solution.serialize(root).toString());
  });
});