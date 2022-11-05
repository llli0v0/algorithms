var NumberContainers = function() {
  this.indexMap = new Map();
  this.numberMap = new Map();
};

/** 
 * @param {number} index 
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function(index, number) {
  let { indexMap, numberMap, heapCompera } = this;
  if (indexMap.has(index)) {
    let oldn = indexMap.get(index);
    numberMap.get(oldn).set.delete(index);
  }
  indexMap.set(index, number);
  if (!numberMap.has(number)) numberMap.set(number, { set: new Set(), heap: new Heap() });
  let { set, heap } = numberMap.get(number);
  set.add(index);
  heap.push(index);
};

/** 
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function(number) {
  let { numberMap } = this;
  if (!numberMap.has(number)) return -1;
  let { set, heap } = numberMap.get(number);
  while (heap.list.length) {
    let index = heap.list[0];
    if (set.has(index)) return index;
    else heap.pop();
  }
  return -1;
};

/**
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */

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
