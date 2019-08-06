class SnapshotArray {
  /**
   * @param {number} length
   */
  constructor(length) {
    this.snaps = [];
    this.pool = new Map();
  }

  /** 
   * @param {number} index 
   * @param {number} val
   * @return {void}
   */
  set(index, val) {
    this.pool.set(index, val);
  }

  /**
   * @return {number}
   */
  snap() {
    this.snaps.push(this.pool);
    this.pool = new Map();
    return this.snaps.length - 1;
  }

  /** 
   * @param {number} index 
   * @param {number} snap_id
   * @return {number}
   */
  get(index, snap_id) {
    for (let i = snap_id; i >= 0; i--) {
      if (this.snaps[i].get(index)) return this.snaps[i].get(index);
    }

    return 0;
  }
}

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */