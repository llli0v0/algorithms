/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.head = this.tail = null;
  this.map = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.map.has(key)) return -1;
  let { val, node } = this.map.get(key);
  let pre = node.pre, next = node.next;
  if (pre && next) {
    pre.next = next;
    next.pre = pre;
    node.next = null;
    node.pre = null;
    this.tail.next = node;
    node.pre = this.tail;
    this.tail = node;
  } else if (next) {
    this.head = next;
    node.next = null;
    next.pre = null;
    this.tail.next = node;
    node.pre = this.tail;
    this.tail = node;
  }
  return val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.map.has(key)) {
    let { node } = this.map.get(key);
    let pre = node.pre, next = node.next;
    if (pre && next) {
      pre.next = next;
      next.pre = pre;
      node.pre = null;
      node.next = null;
      this.tail.next = node;
      node.pre = this.tail;
      this.tail = node;
    } else if (next) {
      this.head = next;
      next.pre = null;
      node.next = null;
      this.tail.next = node;
      node.pre = this.tail;
      this.tail = node;
    }
    this.map.set(key, { val: value, node });
  } else {
    let node = new Node(key);
    if (this.capacity) {
      if (!this.tail) {
        this.head = this.tail = node;
      } else {
        this.tail.next = node;
        node.pre = this.tail;
        this.tail = node;
      }
      this.map.set(key, { val: value, node });
      this.capacity--;
    } else {
      this.map.delete(this.head.key);
      if (this.head === this.tail) {
        this.head = this.tail = node;
      } else {
        this.head = this.head.next;
        this.head.pre.next = null;
        this.head.pre = null;
        this.tail.next = node;
        node.pre = this.tail;
        this.tail = node;
      }
    }
    this.map.set(key, { val: value, node });
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

class Node {
  constructor(key) {
    this.next = null;
    this.pre = null;
    this.key = key;
  }
}
