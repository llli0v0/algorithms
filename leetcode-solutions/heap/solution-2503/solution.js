/**
 * @param {number[][]} grid
 * @param {number[]} queries
 * @return {number[]}
 */
var maxPoints = function(grid, queries) {
  for (let i = 0; i < queries.length; i++) {
    queries[i] = [queries[i], i];
  }
  queries.sort((a, b) => a[0] - b[0]);
  let heap = new Heap((a, b) => a[0] - b[0]);
  let visited = new Set();
  heap.push([grid[0][0], 0, 0]);
  let score = 0;
  let res = new Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
    let [q, index] = queries[i];
    while (heap.list.length && heap.list[0][0] < q) {
      let [v, x, y] = heap.pop();
      let key = `${x} ${y}`;
      if (!visited.has(key)) {
        score++;
        visited.add(key);
        if (x - 1 >= 0) heap.push([grid[x - 1][y], x - 1, y]);
        if (y - 1 >= 0) heap.push([grid[x][y - 1], x, y - 1]);
        if (x + 1 < grid.length) heap.push([grid[x + 1][y], x + 1, y]);
        if (y + 1 < grid[0].length) heap.push([grid[x][y + 1], x, y + 1]);
      }
    }
    res[index] = score;
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
