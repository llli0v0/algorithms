class MinHeap {
  constructor() {
    this.heapContainer = [];
  }
  add(item) {
    this.heapContainer.push(item);
    this.heapifyUp();
    return this;
  }
  heapifyUp() {
    let currentIndex = this.heapContainer.length - 1;
    while (
      this.hasParent(currentIndex) &&
      this.heapContainer[currentIndex].val < this.heapContainer[this.getParentIndex(currentIndex)].val
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }
  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0;
  }
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }
  swap(index1, index2) {
    let temp = this.heapContainer[index1];
    this.heapContainer[index1] = this.heapContainer[index2];
    this.heapContainer[index2] = temp;
  }
  poll() {
    const item = this.heapContainer[0];
    this.heapContainer[0] = this.heapContainer.pop();
    this.heapifyDown();
    return item;
  }
  heapifyDown(index = 0) {
    let currentIndex = index;
    let nextIndex = null;
    while (
      this.hasLeftChild(currentIndex) &&
      (
        this.heapContainer[currentIndex].val > this.heapContainer[this.getLeftChildIndex(currentIndex)].val ||
        (this.hasRightChild(currentIndex) && this.heapContainer[currentIndex].val > this.heapContainer[this.getRightChildIndex(currentIndex)].val)
      )
    ) {
      if (this.hasRightChild(currentIndex)) {
        nextIndex = this.getRightChildIndex(currentIndex);
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex);
      }
      this.swap(currentIndex, nextIndex);
      currentIndex = nextIndex;
    }
  }
  getLeftChildIndex(parentIndex) {
    return (2 * parentIndex) + 1;
  }
  getRightChildIndex(parentIndex) {
    return (2 * parentIndex) + 2;
  }
  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
  }
  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
  }
}

module.exports = { MinHeap: MinHeap };