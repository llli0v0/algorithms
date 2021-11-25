/**
 * @param {number[]} arr
 */
var RangeFreqQuery = function(arr) {
  this.map = {};
  for (let i = 0; i < arr.length; i++) {
    if (this.map[arr[i]] === undefined) this.map[arr[i]] = [];
    this.map[arr[i]].push(i);
  }
};

/** 
 * @param {number} left 
 * @param {number} right 
 * @param {number} value
 * @return {number}
 */
RangeFreqQuery.prototype.query = function(left, right, value) {
  let leftIndex, rightIndex;
  let arr = this.map[value];
  if (arr) {
    if (left > arr[arr.length - 1] || right < arr[0]) return 0;
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
      let m = Math.floor((l + r) / 2);
      if (arr[m] < left) {
        l = m + 1;
      } else {
        r = m;
      }
    }
    leftIndex = l;
    l = 0, r = arr.length - 1;
    while (l < r) {
      let m = Math.ceil((l + r) / 2);
      if (arr[m] > right) {
        r = m - 1;
      } else {
        l = m;
      }
    }
    rightIndex = l;
  } else return 0;
  if (rightIndex < leftIndex) return 0;
  return rightIndex - leftIndex + 1;
};

/**
 * Your RangeFreqQuery object will be instantiated and called as such:
 * var obj = new RangeFreqQuery(arr)
 * var param_1 = obj.query(left,right,value)
 */