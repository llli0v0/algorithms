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
    let nodes = [];
    for (let key in this.counter) {
      nodes.push(new TreeNode(this.counter[key]));
      nodes[nodes.length - 1].key = key;
    }
    nodes = nodes.sort((a, b) => a.val - b.val);
    this.root = nodes[0];
    while (nodes.length > 1) {
      let l = nodes.shift();
      let r = nodes.shift();
      this.root = new TreeNode(l.val + r.val);
      this.root.left = l;
      this.root.right = r;
      nodes.push(this.root);
      nodes = nodes.sort((a, b) => a.val - b.val);
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