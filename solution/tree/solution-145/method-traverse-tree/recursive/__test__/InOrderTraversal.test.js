const { BST } = require('../../../../../../DataStructuresSet');
const InOrderTraversal = require('../InOrderTraversal');

describe('in order traversal', () => {
  it('should traversal bst in order', () => {
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
    expect(InOrderTraversal(bst.root).join(',')).toBe('2,3,4,6,7,8,9,10,12,13,14,15,17,18,19');
  });
});