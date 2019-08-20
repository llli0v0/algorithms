class SummaryRanges {
  constructor() {
    this.M = {};
    this.S = {};
  }

  /** 
   * @param {number} val
   * @return {void}
   */
  addNum(val) {
    if (this.M[val]) return;

    this.M[val] = new Node(val);

    if (this.M[val - 1]) {
      this.M[val].range = [this.M[val - 1].P.range[0], val];
      delete this.S[this.M[val - 1].P.val];
      this.M[val - 1].P.parent = this.M[val];
    }

    if (this.M[val + 1]) {
      this.M[val].range = [this.M[val].P.range[0], this.M[val + 1].P.range[1]];
      delete this.S[this.M[val + 1].P.val];
      this.M[val + 1].P.parent = this.M[val];
    }

    this.S[val] = this.M[val];
  }

  /**
   * @return {number[][]}
   */
  getIntervals() {
    let result = [];

    for (let k in this.S) result.push(this.S[k].range);

    return result.sort((a, b) => a[0] - b[0]);
  }
}

class Node {
  constructor(val) {
    this.parent = null;
    this.range = [val, val];
    this.val = val;
  }

  get P() {
    if (!this.parent) return this;
    return this.parent.P;
  }
}

/** 
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(val)
 * var param_2 = obj.getIntervals()
 */