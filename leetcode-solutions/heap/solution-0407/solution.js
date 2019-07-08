/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
  if (!heightMap.length || !heightMap[0].length) return 0;

  let heap = new Heap(0);

  let V = new Set();

  for (let i = 0; i < heightMap[0].length; i++) {
    let a = [heightMap[0][i], [0, i]];
    heap.heappush(a);
    V.add(a[1].join());
  }
  for (let i = 0; i < heightMap[heightMap.length - 1].length; i++) {
    let a = [heightMap[heightMap.length - 1][i], [heightMap.length - 1, i]];
    heap.heappush(a);
    V.add(a[1].join());
  }
  for (let i = 1; i < heightMap.length - 1; i++) {
    let a = [heightMap[i][0], [i, 0]];
    heap.heappush(a);
    V.add(a[1].join());
  }
  for (let i = 1; i < heightMap.length - 1; i++) {
    let a = [heightMap[i][heightMap[i].length - 1], [i, heightMap[i].length - 1]];
    heap.heappush(a);
    V.add(a[1].join());
  }

  let result = 0;

  while (heap.heap.length) {
    let a = heap.heappop();

    helper(a[1], a[0]);
  }

  return result;

  function helper(a, h) {
    let A = [];

    if (heightMap[a[0] - 1] !== undefined && !V.has([a[0] - 1, a[1]].join())) A.push([a[0] - 1, a[1]]);
    if (heightMap[a[0] + 1] !== undefined && !V.has([a[0] + 1, a[1]].join())) A.push([a[0] + 1, a[1]]);
    if (heightMap[a[0]][a[1] - 1] !== undefined && !V.has([a[0], a[1] - 1].join())) A.push([a[0], a[1] - 1]);
    if (heightMap[a[0]][a[1] + 1] !== undefined && !V.has([a[0], a[1] + 1].join())) A.push([a[0], a[1] + 1]);

    while (A.length) {
      let b = A.pop();

      if (V.has(b.join())) continue;

      if (heightMap[b[0]][b[1]] <= h) {
        result += h - heightMap[b[0]][b[1]];;

        if (heightMap[b[0] - 1] !== undefined) A.push([b[0] - 1, b[1]]);
        if (heightMap[b[0] + 1] !== undefined) A.push([b[0] + 1, b[1]]);
        if (heightMap[b[0]][b[1] - 1] !== undefined) A.push([b[0], b[1] - 1]);
        if (heightMap[b[0]][b[1] + 1] !== undefined) A.push([b[0], b[1] + 1]);
      } else {
        heap.heappush([heightMap[b[0]][b[1]], [b[0], b[1]]]);
      }

      V.add(b.join());
    }
  }
};

class Heap {
  constructor(key) {
    this.heap = [];
    // compare with key, In order to satisfy compare object
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