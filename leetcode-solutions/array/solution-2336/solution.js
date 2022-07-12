var SmallestInfiniteSet = function() {
  this.minInt = 1;
  this.addSet = [];
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
  if (this.addSet.length) {
    return this.addSet.shift();
  }
  this.minInt++;
  return this.minInt - 1;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
  if (num < this.minInt) {
    if (!this.addSet.length) return this.addSet.push(num);
    for (let i = 0; i < this.addSet.length; i++) {
      if (this.addSet[i] === num) break;
      else if (num < this.addSet[i]) {
        this.addSet.splice(i, 0, num);
        break;
      } else if (i === this.addSet.length - 1) {
        this.addSet.push(num);
        break;
      }
    }
  }
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */