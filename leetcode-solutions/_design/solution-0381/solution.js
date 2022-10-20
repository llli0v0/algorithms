var RandomizedCollection = function() {
  this.nums = [];
  this.indexMap = {};
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
  let indexMap = this.indexMap;
  let nums = this.nums;
  nums.push(val);
  if (indexMap[val] === undefined) indexMap[val] = { arr: [], set: new Set() };
  indexMap[val].arr.push(nums.length - 1);
  indexMap[val].set.add(nums.length - 1);
  if (indexMap[val].set.size === 1) return true;
  return false;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
  let indexMap = this.indexMap;
  let nums = this.nums;
  if (indexMap[val]?.set?.size) {
    let delArr = indexMap[val].arr;
    let delSet = indexMap[val].set;
    while (!delSet.has(delArr[delArr.length - 1])) delArr.pop();
    let index = delArr.pop();
    delSet.delete(index);
    let tailIndex = nums.length - 1;
    if (index === tailIndex) {
      nums.pop();
    } else {
      let tailVal = nums[tailIndex];
      let tailArr = indexMap[tailVal].arr;
      let tailSet = indexMap[tailVal].set;
      tailArr.push(index);
      tailSet.add(index);
      tailSet.delete(tailIndex);
      nums[index] = nums.pop();
    }
    return true;
  }
  return false;
};

/**
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
  return this.nums[Math.floor(Math.random() * this.nums.length)];
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
