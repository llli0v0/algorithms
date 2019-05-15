class RLEIterator {
  /**
   * @param {number[]} A
   */
  constructor(A) {
    this.A = A;
  }

  /** 
   * @param {number} n
   * @return {number}
   */
  next(n) {
    while (this.A.length && n - this.A[0] > 0) {
      n -= this.A[0];
      this.A.shift();
      this.A.shift();
    }
    if (this.A.length) {
      this.A[0] -= n;
      return this.A[1];
    }
    return -1;
  }
}

/** 
 * Your RLEIterator object will be instantiated and called as such:
 * var obj = new RLEIterator(A)
 * var param_1 = obj.next(n)
 */