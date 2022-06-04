/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDifference = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = { index: i, val: nums[i] };
  }
  let leftMaxHeap = new Heap('val');
  leftMaxHeap.isMaxHeap = true;
  let leftSum = 0;
  for (let i = 0; i < nums.length / 3; i++) {
    leftMaxHeap.heappush({ val: nums[i].val, index: nums[i].index });
    leftSum += nums[i].val;
  }
  let handleLeft = (i) => {
    leftMaxHeap.heappush({ val: nums[i].val, index: nums[i].index });
    leftSum += nums[i].val;
    leftSum -= leftMaxHeap.heappop().val;
  };
  let rightMaxHeap = new Heap('val');
  rightMaxHeap.isMaxHeap = true;
  let inRightHeap = new Set();
  for (let i = nums.length / 3; i < nums.length; i++) {
    rightMaxHeap.heappush({ val: nums[i].val, index: nums[i].index });
    inRightHeap.add(nums[i].index);
  }
  let rightSum = 0;
  while (rightMaxHeap.heap.length > nums.length / 3) {
    let item = rightMaxHeap.heappop();
    rightSum += item.val;
    inRightHeap.delete(item.index);
  }
  let handleRight = (i) => {
    if (inRightHeap.has(i)) {
      inRightHeap.delete(i);
      return;
    }
    let item;
    while (rightMaxHeap.heap.length) {
      item = rightMaxHeap.heappop();
      if (inRightHeap.has(item.index)) {
        inRightHeap.delete(item.index);
        break;
      }
    }
    rightSum -= nums[i].val;
    rightSum += item ? item.val : 0;
  };

  let result = leftSum - rightSum;
  for (let i = nums.length / 3; i < nums.length / 3 * 2; i++) {
    handleLeft(i);
    handleRight(i);
    result = Math.min(result, leftSum - rightSum);
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
    if (this.heap.length <= 1) {
      let popItem = this.heap.pop();
      if (this.isMaxHeap && this.compareKey) {
        popItem[this.compareKey] = -popItem[this.compareKey];
      }
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
