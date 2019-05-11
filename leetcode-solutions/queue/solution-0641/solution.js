/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
class MyCircularDeque {
  constructor(k) {
    this.queue = [];
    this.MAX_SIZE = k;
  }

  insertFront(value) {
    if (this.queue.length < this.MAX_SIZE) {
      this.queue.unshift(value);
      return true;
    }
    return false;
  }

  insertLast(value) {
    if (this.queue.length < this.MAX_SIZE) {
      this.queue.push(value);
      return true;
    }
    return false;
  }

  deleteFront() {
    if (this.queue.length > 0) {
      this.queue.shift();
      return true;
    }
    return false;
  }

  deleteLast() {
    if (this.queue.length > 0) {
      this.queue.pop();
      return true;
    }
    return false;
  }

  getFront() {
    if (this.queue.length === 0) return -1;
    return this.queue[0];
  }

  getRear() {
    if (this.queue.length === 0) return -1;
    return this.queue[this.queue.length - 1];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  isFull() {
    return this.queue.length === this.MAX_SIZE;
  }
}

/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */