const { BST } = require('../../../../../../DataStructuresSet');
const PostOrderTraversal = require('../PostOrderTraversal');

describe('post order traversal', () => {
  it('should traversal bst post order', () => {
    let bst = new BST();
    bst.insert(10);
    bst.insert(6);
    bst.insert(15);
    bst.insert(3);
    bst.insert(8);
    bst.insert(13);
    bst.insert(18);
    bst.insert(2);
    bst.insert(4);
    bst.insert(7);
    bst.insert(9);
    bst.insert(12);
    bst.insert(14);
    bst.insert(17);
    bst.insert(19);
    expect(PostOrderTraversal(bst.root).join(',')).toBe('2,4,3,7,9,8,6,12,14,13,17,19,18,15,10');
  });
});