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

function getHuffmanCoding(str) {
  let huffmanTree = new HuffmanTree(str);
  let codeDict = huffmanTree.counter;
  getCoding(huffmanTree.root, '');
  return codeDict;
}



getHuffmanCoding('llsdfjijisjdfsjiaiohehsdfh');