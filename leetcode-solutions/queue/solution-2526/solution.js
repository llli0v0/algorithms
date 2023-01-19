/**
 * @param {number} value
 * @param {number} k
 */
var DataStream = function(value, k) {
  this.queue = [];
  this.counter = {};
  this.k = k;
  this.value = value;
};

/** 
 * @param {number} num
 * @return {boolean}
 */
DataStream.prototype.consec = function(num) {
  let { value, k, queue, counter } = this;
  counter[num] = counter[num] ?? 0;
  counter[num]++;
  queue.push(num);
  if (queue.length === k) {
    if (counter[value] === k) return true;
  } else if (queue.length === k + 1) {
    counter[queue.shift()]--;
    if (counter[value] === k) return true;
  }
  return false;
};

/**
 * Your DataStream object will be instantiated and called as such:
 * var obj = new DataStream(value, k)
 * var param_1 = obj.consec(num)
 */
