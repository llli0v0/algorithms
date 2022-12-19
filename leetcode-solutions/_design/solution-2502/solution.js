/**
 * @param {number} n
 */
var Allocator = function(n) {
  this.arr = new Array(n).fill(0);
};

/** 
 * @param {number} size 
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.allocate = function(size, mID) {
  let idx = 0;
  let f = false;
  while (idx + size <= this.arr.length) {
    for (let i = idx; i < idx + size; i++) {
      if (this.arr[i] !== 0) {
        idx = i + 1;
        break;
      }
      if (i === idx + size - 1) f = true;
    }
    if (f) break;
  }
  if (f) {
    for (let i = idx; i < idx + size; i++) {
      this.arr[i] = mID;
    }
    return idx;
  }
  return -1;
};

/** 
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.free = function(mID) {
  let res = 0;
  for (let i = 0; i < this.arr.length; i++) {
    if (this.arr[i] === mID) {
      this.arr[i] = 0;
      res++;
    }
  }
  return res;
};

/**
 * Your Allocator object will be instantiated and called as such:
 * var obj = new Allocator(n)
 * var param_1 = obj.allocate(size,mID)
 * var param_2 = obj.free(mID)
 */
