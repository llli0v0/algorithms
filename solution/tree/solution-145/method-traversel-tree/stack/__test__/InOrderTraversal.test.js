const { BST } = require('../../../../../../DataStructuresSet');
const InOrderTraversal = require('../InOrderTraversal');

describe('in order traversal use stack', () => {
  it('should can detail empty tree', () => {
    let bst = new BST();
    expect(InOrderTraversal(bst.root)).toEqual([]);
  });
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
    expect(InOrderTraversal(bst.root).join(',')).toBe('2,3,4,6,7,8,9,10,12,13,14,15,17,18,19');
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
    expect(InOrderTraversal(bst.root).join(',')).toBe('1,2,3,4,5,6,7,8,9,10');
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
    expect(InOrderTraversal(bst.root).join(',')).toBe('1,2,3,4,5,6,7,8,9,10');
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
    expect(InOrderTraversal(bst.root).join(',')).toBe('4,6,7,8,9,10,14,15,17,18,19');
  });
});