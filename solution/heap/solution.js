/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
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
          nextIndex = this.heapContainer[this.getRightChildIndex(currentIndex)].val > this.heapContainer[this.getLeftChildIndex(currentIndex)].val ?
            this.getLeftChildIndex(currentIndex) : this.getRightChildIndex(currentIndex);
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
  let minHeap = new MinHeap();
  let haveSearch = {};
  let end = [grid.length - 1, grid[0].length - 1].toString();
  let result;
  minHeap.add({ val: grid[0][1], local: [0, 1] }).add({ val: grid[1][0], local: [1, 0] });
  haveSearch[[0, 0].toString()] = true;
  haveSearch[[0, 1].toString()] = true;
  haveSearch[[1, 0].toString()] = true;
  while (minHeap.heapContainer.length) {
    let currentWaterLevel = minHeap.poll();
    result = currentWaterLevel.val;
    fill(currentWaterLevel);
  }
  return grid[0][0] > result ? grid[0][0] : result;
  function fill(currentWaterLevel) {
    let stack = [currentWaterLevel];
    while (stack.length) {
      let current = stack.pop();
      let currentLocal = current.local;
      let top = grid[currentLocal[0] - 1] === undefined ? undefined : grid[currentLocal[0] - 1][currentLocal[1]];
      let bottom = grid[currentLocal[0] + 1] === undefined ? undefined : grid[currentLocal[0] + 1][currentLocal[1]];
      let left = grid[currentLocal[0]][currentLocal[1] - 1];
      let right = grid[currentLocal[0]][currentLocal[1] + 1];
      let topC = [currentLocal[0] - 1, currentLocal[1]];
      if (currentLocal.toString() === end) {
        stack = [];
        minHeap.heapContainer = [];
        return;
      }
      if (top !== undefined && haveSearch[topC.toString()] === undefined) {
        if (top > currentWaterLevel.val) {
          minHeap.add({ val: top, local: topC });
        } else {
          stack.push({ val: top, local: topC });
        }
        haveSearch[topC.toString()] = true;
      }
      let bottomC = [currentLocal[0] + 1, currentLocal[1]];
      if (bottom !== undefined && haveSearch[bottomC.toString()] === undefined) {
        if (bottom > currentWaterLevel.val) {
          minHeap.add({ val: bottom, local: bottomC });
        } else {
          stack.push({ val: bottom, local: bottomC });
        }
        haveSearch[bottomC.toString()] = true;
      }
      let leftC = [currentLocal[0], currentLocal[1] - 1];
      if (left !== undefined && haveSearch[leftC.toString()] === undefined) {
        if (left > currentWaterLevel.val) {
          minHeap.add({ val: left, local: leftC });
        } else {
          stack.push({ val: left, local: leftC });
        }
        haveSearch[leftC.toString()] = true;
      }
      let rightC = [currentLocal[0], currentLocal[1] + 1];
      if (right !== undefined && haveSearch[rightC.toString()] === undefined) {
        if (right > currentWaterLevel.val) {
          minHeap.add({ val: right, local: rightC });
        } else {
          stack.push({ val: right, local: rightC });
        }
        haveSearch[rightC.toString()] = true;
      }
    }
  }
};

module.exports = { solution: swimInWater };