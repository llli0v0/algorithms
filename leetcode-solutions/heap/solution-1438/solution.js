/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
  let minHeap = new Heap(0);
  let maxHeap = new Heap(0);
  let left = 0;
  let right = 0;
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    minHeap.heappush([nums[i], i]);
    maxHeap.heappush([-nums[i], i]);
    if (-maxHeap.heap[0][0] - minHeap.heap[0][0] > limit) {
      if (minHeap.heap[0][1] === i) {
        while (-maxHeap.heap[0][0] - minHeap.heap[0][0] > limit || maxHeap.heap[0][1] < left) {
          let item = maxHeap.heappop();
          if (item[1] >= left) left = item[1] + 1;
        }
      } else {
        while (-maxHeap.heap[0][0] - minHeap.heap[0][0] > limit || minHeap.heap[0][1] < left) {
          let item = minHeap.heappop();
          if (item[1] >= left) left = item[1] + 1;
        }
      }
    }
    right = i;
    result = Math.max(result, right - left + 1);
  }
  return result;
};

class Heap {
  /**
   * @param {String} key
   */
  constructor(key) {
    this.heap = [];
    this.isMaxHeap = false;
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