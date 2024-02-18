class Heap<T>{
  list: T[];
  comparetor: ((arg1: T, arg2: T) => number);
  constructor(comparetor: (arg1: T, arg2: T) => number) {
    this.list = [];
    this.comparetor = comparetor;
  }

  isEmpty(): boolean {
    return this.list.length === 0;
  }

  lessThan(a: T, b: T): boolean {
    return this.comparetor(a, b) < 0;
  }

  equal(a: T, b: T): boolean {
    return this.comparetor(a, b) === 0;
  }

  biggerThan(a: T, b: T): boolean {
    return this.comparetor(a, b) > 0;
  }

  push(item: T): void {
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

  pop(): T | void {
    let { list, getLeftChildIndex, getRightChildIndex } = this;
    let popItem: T | void;
    if (list.length <= 1) {
      popItem = list.pop();
    } else {
      popItem = list[0];
      list[0] = list.pop()!;
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
    }
    return popItem;
  }

  getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  getLeftChildIndex(parentIndex: number): number {
    return parentIndex * 2 + 1;
  }

  getRightChildIndex(parentIndex: number): number {
    return parentIndex * 2 + 2;
  }
}
