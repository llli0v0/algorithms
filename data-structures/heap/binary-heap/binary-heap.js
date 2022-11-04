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

  heappush(item) {
    let { list, getParentIndex } = this;
    list.push(item);
    let index = list.length - 1;
    let pIndex = getParentIndex(index);
    while (pIndex >= 0 && this.biggerThan(list[pIndex], list[index])) {
      let temp = list[pIndex];
      list[pIndex] = list[index];
      list[index] = temp;
      index = pIndex;
      pIndex = getParentIndex(index);
    }
  }

  heappop() {
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

module.exports = Heap;
