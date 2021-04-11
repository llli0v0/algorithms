/**
 * @param {number} m
 * @param {number} k
 */
var MKAverage = function(m, k) {
  this.m = m;
  this.k = k;
  this.mPool = [];
  this.mSum = 0;
  this.kHeadSum = 0;
  this.kTailSum = 0;
  this.allElement = [];
};

MKAverage.prototype.addElement = function(num) {
  let allElement = this.allElement;
  let mPool = this.mPool;
  allElement.push(num);
  this.mSum += num;
  if (allElement.length <= this.m) {
    mPool.push(num);
    if (allElement.length === this.m) {
      mPool.sort((a, b) => a - b);
      this.kHeadSum = mPool.slice(0, this.k).reduce((a, b) => a + b);
      this.kTailSum = mPool.slice(mPool.length - this.k).reduce((a, b) => a + b);
    }
    return this;
  }
  let delIndex = this.findIndex(mPool, allElement[allElement.length - this.m - 1]);
  if (delIndex < this.k) {
    this.kHeadSum -= mPool[delIndex];
    this.kHeadSum += mPool[this.k];
  } else if (delIndex >= mPool.length - this.k) {
    this.kTailSum -= mPool[delIndex];
    this.kTailSum += mPool[mPool.length - this.k - 1];
  }
  mPool.splice(delIndex, 1);
  this.mSum -= allElement[allElement.length - this.m - 1];
  let insertIndex = this.findCloseOrEqualIndex(mPool, num);
  if (insertIndex < this.k) {
    this.kHeadSum -= mPool[this.k - 1];
    this.kHeadSum += num;
  } else if (insertIndex > mPool.length - this.k) {
    this.kTailSum -= mPool[mPool.length - this.k];
    this.kTailSum += num;
  }
  mPool.splice(insertIndex, 0, num);
  return this;
};

MKAverage.prototype.findCloseOrEqualIndex = function(arr, val) {
  if (val < arr[0]) return 0;
  else if (val > arr[arr.length - 1]) return arr.length;
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    let m = Math.floor((l + r) / 2);
    if (val > arr[m] && val <= arr[m + 1]) {
      l = r = m;
    } else if (val > arr[m]) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return l + 1;
};

MKAverage.prototype.findIndex = function(arr, val) {
  let l = 0;
  let r = arr.length;
  while (l < r) {
    let m = Math.floor((l + r) / 2);
    if (arr[m] < val) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return l;
};

MKAverage.prototype.calculateMKAverage = function() {
  if (this.mPool.length < this.m) return -1;
  return Math.floor((this.mSum - this.kHeadSum - this.kTailSum) / (this.m - this.k * 2));
};

/**
 * Your MKAverage object will be instantiated and called as such:
 * var obj = new MKAverage(m, k)
 * obj.addElement(num)
 * var param_2 = obj.calculateMKAverage()
 */
