/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} src1
 * @param {number} src2
 * @param {number} dest
 * @return {number}
 */
 var minimumWeight = function(n, edges, src1, src2, dest) {
  let graph = buildGraph(edges, false);
  let mostShortDisSrc1 = { [src1]: 0 };
  dijkstra(src1, graph, mostShortDisSrc1);
  let mostShortDisSrc2 = { [src2]: 0 };
  dijkstra(src2, graph, mostShortDisSrc2);

  let overTurnGraph = buildGraph(edges, true);
  let mostShortDisDest = { [dest]: 0 };
  dijkstra(dest, overTurnGraph, mostShortDisDest);

  let result = Infinity;
  for (let i = 0; i < n; i++) {
    let d1 = mostShortDisSrc1[i] === undefined ? Infinity : mostShortDisSrc1[i];
    let d2 = mostShortDisSrc2[i] === undefined ? Infinity : mostShortDisSrc2[i];
    let d3 = mostShortDisDest[i] === undefined ? Infinity : mostShortDisDest[i];
    result = Math.min(result, d1 + d2 + d3);
  }
  return result > (10**5)**2 + 1 ? -1 : result;

  function buildGraph(edges, isOverTurn = false) {
    let edgeMap = {};
    for (let i = 0; i < edges.length; i++) {
      let edge = edges[i];
      let k = `${edge[0]} ${edge[1]}`;
      edgeMap[k] = Math.min(edgeMap[k] === undefined ? Infinity : edgeMap[k], edge[2]);
    }
    edges = [];
    for (let k in edgeMap) {
      let edge = k.split(' ').map(item => parseInt(item));
      edge.push(edgeMap[k]);
      edges.push(edge);
    }
    let graph = {}, start, end, len;
    for (let i = 0; i < edges.length; i++) {
      let edge = edges[i];
      if (isOverTurn) {
        [ end, start, len ] = edge;
      } else {
        [ start, end, len ] = edge;
      }
      if (graph[start] === undefined) graph[start] = {};
      graph[start][end] = len;
    }
    return graph;
  }

  function dijkstra(start, graph, mostShortDis) {
    let heap = new Heap('dis');
    let startObj = graph[start];
    let visited = new Set();
    for (let k in startObj) {
      let end = k;
      let dis = startObj[k];
      let el = new HeapEle(start, end, dis);
      mostShortDis[end] = dis;
      heap.heappush(el);
    }
    visited.add(String(start));
    while (heap.heap.length) {
      let cur = heap.heappop();
      let { end, dis } = cur;
      visited.add(end);
      for (let k in graph[end]) {
        let newEnd = k;
        if (visited.has(newEnd)) continue;
        let newDis = graph[end][k] + dis;
        let el = new HeapEle(start, newEnd, newDis);
        heap.heappush(el);
        mostShortDis[newEnd] = Math.min(mostShortDis[newEnd] === undefined ? Infinity : mostShortDis[newEnd], newDis);
      }
    }
  }
};

class HeapEle {
  constructor(start, end, dis) {
    this.start = start;
    this.end = end;
    this.dis = dis;
  }
}

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
      if (this.isMaxHeap) {
        return -popItem;
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
