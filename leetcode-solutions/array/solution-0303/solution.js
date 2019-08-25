class NumArray {
  /**
   * @param {number[]} nums
   */
  constructor(nums) {
    this.S = this.init(nums);
    this.S[-1] = 0;
  }

  init(nums) {
    let A = [];
    let s = 0;

    for (let i = 0; i < nums.length; i++) {
      s += nums[i];
      A.push(s);
    }

    return A;
  }

  /** 
   * @param {number} i 
   * @param {number} j
   * @return {number}
   */
  sumRange(i, j) {
    return this.S[j] - this.S[i - 1];
  }
}

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */