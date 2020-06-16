class TreeAncestor {
  /**
   * @param {number} n
   * @param {number[]} parent
   */
  constructor(n, parent) {
    this.nodes = { 0: { id: 0, parent: -1, deep: 0, children: [] } };
    this.computed = {};
    for (let i = 1; i < n; i++) {
      this.nodes[i] = { id: i, parent: parent[i], deep: 0, children: [] };
      this.nodes[parent[i]].children.push(i);
    }
    let currentDeep = 0;
    let queue = [this.nodes[0]];
    let next = [];
    while(queue.length) {
      let curNode = queue.shift();
      curNode.deep = currentDeep;
      this.computed[curNode.id + '-' + 1] = curNode.parent;
      let square = 1;
      while (2**square <= currentDeep) {
        this.computed[curNode.id + '-' + (2**square)] = this.getKthAncestor(curNode.parent, 2**square - 1);
        square++;
      }
      for (let i = 0; i < this.nodes[curNode.id].children.length; i++)
        next.push(this.nodes[this.nodes[curNode.id].children[i]]);
      if (queue.length === 0) {
        queue = next;
        next = [];
        currentDeep++;
      }
    }
  }

  /** 
   * @param {number} node 
   * @param {number} k
   * @return {number}
   */
  getKthAncestor(node, k) {
    if (k > this.nodes[node].deep) return -1;
    if (this.computed[node + '-' + k] !== undefined) return this.computed[node + '-' + k];
    return this.getKthAncestor(this.computed[node + '-' + (2**Math.floor(Math.log2(k)))], k - (2**Math.floor(Math.log2(k))));
  }
}
/**
 * Your TreeAncestor object will be instantiated and called as such:
 * var obj = new TreeAncestor(n, parent)
 * var param_1 = obj.getKthAncestor(node,k)
 */