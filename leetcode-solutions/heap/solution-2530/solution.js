/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function(nums, k) {
  let heap = new Heap((a, b) => b - a);
  for (let i = 0; i < nums.length; i++) {
    heap.push(nums[i]);
  }
  let res = 0;
  while (k) {
    let m = heap.pop();
    res += m;
    heap.push(Math.ceil(m / 3));
    k--;
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
