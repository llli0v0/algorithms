class LinkNode {
  constructor(val) {
    this.pre = null;
    this.next = null;
    this.val = val;
  }
}

var MaxStack = function() {
  this.head = null;
  this.tail = null;
  this.nodeMap = {};
  this.heap = new Heap(undefined, true);
};

/** 
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {
  let node = new LinkNode(x);
  if (this.head === null) {
    this.head = this.tail = node;
  } else {
    this.tail.next = node;
    this.tail.next.pre = this.tail;
    this.tail = this.tail.next;
  }
  this.nodeMap[x] = this.nodeMap[x] ?? [];
  this.nodeMap[x].push(node);
  this.heap.heappush(x);
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function() {
  let top = this.tail;
  this.nodeMap[top.val].pop();
  if (top.pre) {
    top.pre.next = null;
    this.tail = top.pre;
    top.pre = null;
  } else {
    this.head = this.tail = null;
  }
  return top.val;
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
  return this.tail.val;
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function() {
  while(true) {
    let big = -this.heap.heap[0];
    if (this.nodeMap[big].length) {
      return big;
    } else {
      this.heap.heappop();
    }
  }
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {
  while(true) {
    let big = this.heap.heappop();
    if (this.nodeMap[big].length) {
      let node = this.nodeMap[big].pop();
      if (node.pre && node.next) {
        node.pre.next = node.next;
        node.next.pre = node.pre;
        node.next = null;
        node.pre = null;
      } else if (node.next) {
        this.head = node.next;
        this.head.pre = null;
        node.next = null;
      } else if (node.pre) {
        this.tail = node.pre;
        this.tail.next = null;
        node.pre = null;
      } else {
        this.head = this.tail = null;
      }
      return node.val;
    }
  }
};

/**
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */

class Heap {
  /**
   * @param {String} key
   */
  constructor(key, isMaxHeap = false) {
    this.heap = [];
    this.isMaxHeap = isMaxHeap;
    this.compareKey = key;

    if (key !== undefined) {
      this.comparetor = (a, b) => a[key] - b[key];
    } else {
      this.comparetor = (a, b) => a - b;
    }
  }

  lessThan(a, b) {
    return this.comparetor(a, b) < 0;
  }

  equal(a, b) {
    return this.comparetor(a, b) === 0;
  }

  biggerThan(a, b) {
    return this.comparetor(a, b) > 0;
  }

  heappush(item) {
    if (this.isMaxHeap) {
      if (this.compareKey !== undefined) {
        item[this.compareKey] = -item[this.compareKey];
      } else {
        item = -item;
      }
    }

    this.heap.push(item);

    let index = this.heap.length - 1;
    let parentIndex = this.getParentIndex(index);

    while (parentIndex >= 0 && this.biggerThan(this.heap[parentIndex], this.heap[index])) {
      let temp = this.heap[parentIndex];

      this.heap[parentIndex] = this.heap[index];
      this.heap[index] = temp;
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  heappop() {
    if (this.heap.length <= 1) {
      let popItem = this.heap.pop();
      if (this.isMaxHeap && this.compareKey) {
        popItem[this.compareKey] = -popItem[this.compareKey];
      }
      return this.isMaxHeap ? -popItem : popItem;
    }

    let popItem = this.heap[0];
    this.heap[0] = this.heap.pop();

    let index = 0;
    let leftChildIndex = this.getLeftChildIndex(index);
    let rightChildIndex = this.getRightChildIndex(index);

    while (
      leftChildIndex < this.heap.length && this.biggerThan(this.heap[index], this.heap[leftChildIndex]) ||
      rightChildIndex < this.heap.length && this.biggerThan(this.heap[index], this.heap[rightChildIndex])
    ) {
      let swapIndex;

      if (leftChildIndex < this.heap.length && rightChildIndex < this.heap.length) {
        swapIndex = this.lessThan(this.heap[leftChildIndex], this.heap[rightChildIndex]) ? leftChildIndex : rightChildIndex;
      } else {
        swapIndex = leftChildIndex;
      }

      let temp = this.heap[index];

      this.heap[index] = this.heap[swapIndex];
      this.heap[swapIndex] = temp;
      index = swapIndex;
      leftChildIndex = this.getLeftChildIndex(index);
      rightChildIndex = this.getRightChildIndex(index);
    }

    if (this.isMaxHeap) {
      if (this.compareKey !== undefined) {
        popItem[this.compareKey] = -popItem[this.compareKey];
      } else {
        popItem = -popItem;
      }
    }

    return popItem;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  getLeftChildIndex(parentIndex) {
    return parentIndex * 2 + 1;
  }

  getRightChildIndex(parentIndex) {
    return parentIndex * 2 + 2;
  }
}
