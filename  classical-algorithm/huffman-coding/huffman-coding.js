const Heap = require('../../data-structures/heap/heap');

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class HuffmanTree {
  constructor(str) {
    this.root = null;
    this.counter = {};
    this.build(str);
  }

  build(str) {
    for (let i = 0; i < str.length; i++) {
      if (this.counter[str[i]] === undefined) this.counter[str[i]] = 0;
      this.counter[str[i]] += 1;
    }
    let heap = new Heap('val');
    for (let key in this.counter) {
      let node = new TreeNode(this.counter[key]);
      node.key = key;
      heap.heappush(node);
    }
    this.root = heap[0];
    while (heap.heap.length > 1) {
      let l = heap.heappop();
      let r = heap.heappop();
      this.root = new TreeNode(l.val + r.val);
      this.root.left = l;
      this.root.right = r;
      heap.heappush(this.root);
    }
  }
}

class HuffmanEncoding {
  constructor() {
    this.codeDict = {};
  }

  getHuffmanCoding(str) {
    let huffmanTree = new HuffmanTree(str);
    this.codeDict = huffmanTree.counter;
    this.getCoding(huffmanTree.root, '');
    let codeStr = '';
    for (let i = 0; i < str.length; i++) {
      codeStr += this.codeDict[str[i]];
    }
    return codeStr;
  }

  getCoding(node, s) {
    if (!node.left && !node.right) this.codeDict[node.key] = s || '1';
    if (node.left) this.getCoding(node.left, s + '0');
    if (node.right) this.getCoding(node.right, s + '1');
  }
}

module.exports = HuffmanEncoding;