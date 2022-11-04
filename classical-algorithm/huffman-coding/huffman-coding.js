const Heap = require('../../data-structures/heap/binary-heap/binary-heap');

/**
 * 
 * 回顾
 * 
 * huffman 的核心是用二叉树无二意编码(即最终得到的每个字符的编码不是任何其他字符编码的前缀)
 * 构建最优二叉树
 * 
 * 最优二叉树
 * 假设 现在要压缩 'hello world'
 * 首先统计字符频率
 * { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
 * 在 堆 中
 * heap = [ TreeNode{ key: 'h', val: 1 }, TreeNode{ key: 'e', val: 1 }, TreeNode{ key: 'w', val: 1 }, TreeNode{ key: 'd', val: 1 },
 *   TreeNode{ key: ' ', val: 1 }, TreeNode{ key: 'l', val: 3 }, TreeNode{ key: 'r', val: 1 }, TreeNode{ key: 'o', val: 1 } ]
 * 然后 heappop 两个节点 TreeNode{ key: 'h', val: 1 } TreeNode{ key: 'w', val: 1 }
 * 将这两个节点合并为一个节点 并重新翻入 堆 中
 * 这时候的 堆
 * heap = [ TreeNode{ key: 'r', val: 1 }, TreeNode{ key: 'e', val: 1 }, TreeNode{ key: 'o', val: 2 }, TreeNode{ key: 'd', val: 1 }
 *   TreeNode{ key: ' ', val: 1 }, TreeNode{ key: 'l', val: 3 }, TreeNode{ val: 2 } ]
 * 以此类推......
 * 直到 堆 中只有一个 TreeNode
 * 仅剩的这个节点就是最优二叉树的root
 * 
 * 其实最优二叉树的原理很好理解
 * 每次从 堆 中拿两个val最小TreeNode
 * 如果把这两个节点的频率和 看做是一个字符的频率呢？ 这样想就简单多了
 */

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
    let heap = new Heap((a, b) => a.val - b.val);
    for (let key in this.counter) {
      let node = new TreeNode(this.counter[key]);
      node.key = key;
      heap.heappush(node);
    }
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
    this.dict = {};
  }

  getHuffmanCoding(str) {
    let huffmanTree = new HuffmanTree(str);
    this.dict = huffmanTree.counter;
    this.getCoding(huffmanTree.root, '');
    let s = '';
    for (let i = 0; i < str.length; i++) s += this.dict[str[i]];
    return s;
  }

  getCoding(node, s) {
    if (!node.left && !node.right) this.dict[node.key] = s || '1';
    if (node.left) this.getCoding(node.left, s + '0');
    if (node.right) this.getCoding(node.right, s + '1');
  }
}
