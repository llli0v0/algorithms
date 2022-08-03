var MyCalendar = function() {
  this.booked = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
  for (let i = 0; i < this.booked.length; i++) {
    let [a, b] = this.booked[i];
    if (!(end <= a || start >= b)) return false;
  }
  this.booked.push([start, end]);
  return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
