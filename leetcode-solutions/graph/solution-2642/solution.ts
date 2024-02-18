type EdgeElement = [number, number];
type HeapElement = [number, number];

class Graph {
  edges: Map<number, EdgeElement[]>
  constructor(n: number, edges: number[][]) {
    this.edges = new Map();
    for (let edge of edges) {
      let [a, b, w] = edge;
      this.edges.set(a, (this.edges.get(a) ?? []).concat([[b, w]]));
    }
  }

  addEdge(edge: number[]): void {
    let [a, b, w] = edge;
    this.edges.set(a, (this.edges.get(a) ?? []).concat([[b, w]]));
  }

  shortestPath(node1: number, node2: number): number {
    let heap = new MinHeap<HeapElement>((a: HeapElement, b: HeapElement) => a[1] - b[1]);
    heap.push([node1, 0]);
    let vis = new Set<number>();
    while (!heap.isEmpty()) {
      let cur = heap.pop()!;
      let node = cur[0];
      let w = cur[1];
      if (node === node2) return w;
      if (vis.has(node)) continue;
      vis.add(node);
      let chs = this.edges.get(node);
      if (chs) {
        for (let ch of chs) {
          let [nd, w1] = ch;
          heap.push([nd, w + w1]);
        }
      }
    }
    return -1;
  }
}

/**
* Your Graph object will be instantiated and called as such:
* var obj = new Graph(n, edges)
* obj.addEdge(edge)
* var param_2 = obj.shortestPath(node1,node2)
*/

class MinHeap<T>{
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
