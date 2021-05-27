/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function(nums1, nums2) {
  this.nums1 = nums1;
  this.nums2 = nums2;
  this.nums2Map = {};
  for (let i = 0; i < nums2.length; i++) {
    if (this.nums2Map[nums2[i]] === undefined) this.nums2Map[nums2[i]] = 0;
    this.nums2Map[nums2[i]]++;
  }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function(index, val) {
  this.nums2Map[this.nums2[index]]--;
  this.nums2[index] += val;
  if (this.nums2Map[this.nums2[index]] === undefined) this.nums2Map[this.nums2[index]] = 0;
  this.nums2Map[this.nums2[index]]++;
};

/** 
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function(tot) {
  let result = 0;
  for (let i = 0; i < this.nums1.length; i++) {
    let count = this.nums2Map[tot - this.nums1[i]];
    if (count) result += count;
  }
  return result;
};

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */