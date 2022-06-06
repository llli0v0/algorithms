/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumObstacles = function(grid) {
  let graph = {};
  let t = Date.now();
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let key = `${i} ${j}`;
      let arr = graph[key] = [];
      if (i - 1 >= 0) arr.push([grid[i - 1][j], `${i - 1} ${j}`]);
      if (i + 1 < grid.length) arr.push([grid[i + 1][j], `${i + 1} ${j}`]);
      if (j - 1 >= 0) arr.push([grid[i][j - 1], `${i} ${j - 1}`]);
      if (j + 1 < grid[i].length) arr.push([grid[i][j + 1], `${i} ${j + 1}`]);
    }
  }
  let end = `${grid.length - 1} ${grid[0].length - 1}`;
  return dijkstra(0, 0);

  function dijkstra(i, j) {
    let visited = new Set();
    let heap = new Heap(0);
    heap.heappush([0, `${i} ${j}`]);
    while (heap.heap.length) {
      let [len, point] = heap.heappop();
      if (visited.has(point)) continue;
      if (point === end) return len;
      visited.add(point);
      let arr = graph[point];
      for (let i = 0; i < arr.length; i++) {
        let [l, k] = arr[i];
        heap.heappush([len + l, k]);
      }
    }
  }
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
