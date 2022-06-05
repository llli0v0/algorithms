var SORTracker = function() {
  let minComparetor = (a, b) => {
    if (a.score === b.score) {
      let len = Math.min(a.name.length, b.name.length);
      for (let i = 0; i < len; i++) {
        if (a.name[i] < b.name[i]) return 1;
        else if (a.name[i] > b.name[i]) return -1;
      }
      return a.name.length < b.name.length ? 1 : -1;
    }
    return a.score - b.score;
  };
  this.minHeap = new Heap(minComparetor);
  let maxComparetor = (a, b) => {
    if (a.score === b.score) {
      let len = Math.min(a.name.length, b.name.length);
      for (let i = 0; i < len; i++) {
        if (a.name[i] < b.name[i]) return -1;
        else if (a.name[i] > b.name[i]) return 1;
      }
      return a.name.length < b.name.length ? -1 : 1;
    }
    return b.score - a.score;
  };
  this.maxHeap = new Heap(maxComparetor);
};

/** 
 * @param {string} name 
 * @param {number} score
 * @return {void}
 */
SORTracker.prototype.add = function(name, score) {
  let cur = { name, score };
  this.minHeap.heappush(cur);
  this.maxHeap.heappush(this.minHeap.heappop());
};

/**
 * @return {string}
 */
SORTracker.prototype.get = function() {
  let item = this.maxHeap.heappop();
  this.minHeap.heappush(item);
  return item.name;
};

/**
 * Your SORTracker object will be instantiated and called as such:
 * var obj = new SORTracker()
 * obj.add(name,score)
 * var param_2 = obj.get()
 */

 class Heap {
  /**
   * @param {String} key
   */
  constructor(comparetor) {
    this.heap = [];
    this.comparetor = comparetor;
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
    if (this.heap.length <= 1) {
      let popItem = this.heap.pop();
      return popItem;
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
