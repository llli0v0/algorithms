class DinnerPlates {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    this.capacity = capacity;
    this.stacks = [];

    this.filled = new Set();
    this.notFilled = new Heap();
  }

  /** 
   * @param {number} val
   * @return {void}
   */
  push(val) {
    while (
      (this.filled.has(this.notFilled.heap[0]) ||
        this.stacks[this.notFilled.heap[0]] === undefined
      ) && this.stacks.length && this.notFilled.heap.length
    ) {
      this.notFilled.heappop();
    }

    if (!this.notFilled.heap.length) {
      this.stacks.push([]);
      this.notFilled.heappush(this.stacks.length - 1);
    }

    this.stacks[this.notFilled.heap[0]].push(val);

    if (this.stacks[this.notFilled.heap[0]].length === this.capacity) this.filled.add(this.notFilled.heap[0]);
  }

  /**
   * @return {number}
   */
  pop() {
    if (this.stacks.length === 0) return -1;

    let a = this.stacks[this.stacks.length - 1].pop();

    if (this.filled.has(this.stacks.length - 1)) this.filled.delete(this.stacks.length - 1);
    this.notFilled.heappush(this.stacks.length - 1);

    while (this.stacks.length && this.stacks[this.stacks.length - 1].length === 0) this.stacks.pop();

    return a;
  }

  /** 
   * @param {number} index
   * @return {number}
   */
  popAtStack(index) {
    if (this.stacks[index] === undefined || this.stacks[index].length === 0) return -1;

    let a = this.stacks[index].pop();

    if (this.filled.has(index)) this.filled.delete(index);
    this.notFilled.heappush(index);

    while (this.stacks.length && this.stacks[this.stacks.length - 1].length === 0) this.stacks.pop();

    return a;
  }
}

/** 
 * Your DinnerPlates object will be instantiated and called as such:
 * var obj = new DinnerPlates(capacity)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAtStack(index)
 */

class Heap {
  constructor(key) {
    this.heap = [];
    // compare with key, In order to satisfy compare object
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
    if (this.heap.length <= 1) return this.heap.pop();
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