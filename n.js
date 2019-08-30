/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {
  if (k === 1) return nums;

  let a = nums.slice(0, k).map((item, index) => [item, index]).sort((b, c) => b[0] - c[0]);

  let mid = Math.floor(k / 2);

  let L = new Heap(0);
  L.isMaxHeap = true;
  let R = new Heap(0);

  for (let i = 0; i < mid; i++) L.heappush(a[i]);
  for (let i = mid; i < k; i++) R.heappush(a[i]);

  let result = [k % 2 ? R.heap[0][0] : (-L.heap[0][0] + R.heap[0][0]) / 2];

  for (let i = 1; i + k - 1 < nums.length; i++) {
    let M = result[result.length - 1];

    if (nums[i + k - 1] >= M) {
      R.heappush([nums[i + k - 1], i + k - 1]);

      let f = false;

      while (R.heap[0][1] < i) {
        if (R.heappop()[1] === i - 1) f = true;
      }

      if (nums[i - 1] <= M && !f) L.heappush(R.heappop());
    } else {
      L.heappush([nums[i + k - 1], i + k - 1]);

      let f = false;

      while (L.heap[0][1] < i) {
        if (L.heappop()[1] === i - 1) f = true;
      }

      if (nums[i - 1] >= M && !f) R.heappush(L.heappop());
    }

    while (L.heap[0][1] < i) L.heappop();
    while (R.heap[0][1] < i) R.heappop();

    k % 2 ? result.push(R.heap[0][0]) : result.push((-L.heap[0][0] + R.heap[0][0]) / 2);
  }

  return result;
};

class Heap {
  /**
   * 默认是最小堆
   * @param {string} key 作为比较项的key
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
// [-2147483648.0,-2147483648.0,-2147483648.0,-2147483648.0,-2147483648.0,2147483647.0,2147483647.0,2147483647.0,2147483647.0,2147483647.0,-2147483648.0]
console.log(medianSlidingWindow([-2147483648,-2147483648,2147483647,-2147483648,-2147483648,-2147483648,2147483647,2147483647,2147483647,2147483647,-2147483648,2147483647,-2147483648], 3))