/**
 * @param {number[]} nums
 * @return {number[]}
 */
var secondGreaterElement = function(nums) {
  for (let i = 0; i < nums.length; i++) nums[i] = [nums[i], i];
  let heap = new Heap((a, b) => a[0] - b[0]);
  let stack = [];
  let res = new Array(nums.length).fill(-1);
  let { list } = heap;
  for (let i = 0; i < nums.length; i++) {
    let item = nums[i];
    while (list.length && item[0] > list[0][0]) {
      let [val, index] = heap.pop();
      res[index] = item[0];
    }
    while (stack.length && item[0] > stack[stack.length - 1][0]) {
      heap.push(stack.pop());
    }
    stack.push(item);
  }
  return res;
};

class Heap {
  constructor(comparetor) {
    this.list = [];
    this.comparetor = comparetor ?? ((a, b) => a - b);
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

  push(item) {
    let { list, getParentIndex } = this;
    list.push(item);
    let index = list.length - 1;
    let pIndex = getParentIndex(index);
    while (pIndex >= 0 && this.biggerThan(list[pIndex], list[index])) {
      [list[index], list[pIndex]] = [list[pIndex], list[index]];
      index = pIndex;
      pIndex = getParentIndex(index);
    }
  }

  pop() {
    let { list, getLeftChildIndex, getRightChildIndex } = this;
    if (list.length <= 1) return list.pop();
    let popItem = list[0];
    list[0] = list.pop();
    let index = 0;
    let [leftChildIndex, rightChildIndex] = [getLeftChildIndex(index), getRightChildIndex(index)];
    while (
      leftChildIndex < list.length && this.biggerThan(list[index], list[leftChildIndex]) ||
      rightChildIndex < list.length && this.biggerThan(list[index], list[rightChildIndex])
    ) {
      let swapIndex;
      if (leftChildIndex < list.length && rightChildIndex < list.length) {
        swapIndex = this.lessThan(list[leftChildIndex], list[rightChildIndex]) ? leftChildIndex : rightChildIndex;
      } else {
        swapIndex = leftChildIndex;
      }
      [list[index], list[swapIndex]] = [list[swapIndex], list[index]];
      index = swapIndex;
      [leftChildIndex, rightChildIndex] = [getLeftChildIndex(index), getRightChildIndex(index)]
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
