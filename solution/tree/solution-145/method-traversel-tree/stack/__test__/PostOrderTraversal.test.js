const { BST } = require('../../../../../../DataStructuresSet');
const PostOrderTraversal = require('../PostOrderTraversal');

describe('post order traversal use stack', () => {
  it('should traversal use stack', () => {
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
  it('should traversal the only left node tree', () => {
    let bst = new BST();
    bst.insert(10);
    bst.insert(9);
    bst.insert(8);
    bst.insert(7);
    bst.insert(6);
    bst.insert(5);
    bst.insert(4);
    bst.insert(3);
    bst.insert(2);
    bst.insert(1);
    expect(PostOrderTraversal(bst.root).join(',')).toBe('1,2,3,4,5,6,7,8,9,10');
  });
  it('should traversal the only right node tree', () => {
    let bst = new BST();
    bst.insert(1);
    bst.insert(2);
    bst.insert(3);
    bst.insert(4);
    bst.insert(5);
    bst.insert(6);
    bst.insert(7);
    bst.insert(8);
    bst.insert(9);
    bst.insert(10);
    expect(PostOrderTraversal(bst.root).join(',')).toBe('10,9,8,7,6,5,4,3,2,1');
  });
  it('should traversal the shape of rule tree', () => {
    let bst = new BST();
    bst.insert(10);
    bst.insert(6);
    bst.insert(15);
    bst.insert(8);
    bst.insert(18);
    bst.insert(4);
    bst.insert(7);
    bst.insert(9);
    bst.insert(14);
    bst.insert(17);
    bst.insert(19);
    expect(PostOrderTraversal(bst.root).join(',')).toBe('4,7,9,8,6,14,17,19,18,15,10');
  });
});