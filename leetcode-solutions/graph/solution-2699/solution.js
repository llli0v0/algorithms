/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @param {number} target
 * @return {number[][]}
 */
var modifiedGraphEdges = function(n, edges, source, destination, target) {
  let graph = new Map();
  let wm = new Map();
  for (let edge of edges) {
    let [a, b, w] = edge;
    graph.set(a, (graph.get(a) ?? []).concat([b]));
    graph.set(b, (graph.get(b) ?? []).concat([a]));
    wm.set(`${Math.min(a, b)} ${Math.max(a, b)}`, w);
  }
  let { dist } = dijkstra(false);
  if (dist < target) {
    return [];
  } else {
    while (true) {
      let { dist, parent } = dijkstra(true);
      if (dist > target) {
        return [];
      } else if (dist === target) {
        let res = [];
        for (let [key, w] of wm) {
          let [a, b] = key.split(' ').map(item => parseInt(item));
          if (w === -1) {
            res.push([a, b, 1]);
          } else {
            res.push([a, b, w]);
          }
        }
        return res;
      } else {
        let path = [destination];
        while (parent.get(path[path.length - 1]) !== path[path.length - 1]) {
          path.push(parent.get(path[path.length - 1]));
        }
        let done = false;
        for (let i = 1; i < path.length; i++) {
          let a = path[i - 1];
          let b = path[i];
          let key = `${Math.min(a, b)} ${Math.max(a, b)}`;
          let w = wm.get(key);
          if (w === -1) {
            done = true;
            wm.set(key, target - dist + 1);
            break;
          }
        }
        if (!done) return [];
      }
    }
  }

  function dijkstra(change) {
    let heap = new Heap((a, b) => a[0] - b[0]);
    heap.push([0, source, source]);
    let vis = new Set();
    let parent = new Map();
    while (heap.list.length) {
      let [w, v, p] = heap.pop();
      if (vis.has(v)) continue;
      parent.set(v, p);
      vis.add(v);
      if (v === destination) {
        return {
          dist: w,
          parent
        }
      }
      let chs = graph.get(v);
      for (let ch of chs) {
        let key = `${Math.min(ch, v)} ${Math.max(ch, v)}`;
        let w1 = wm.get(key);
        if (w1 === -1) {
          if (change) {
            w1 = 1;
          } else {
            w1 = Infinity;
          }
        }
        heap.push([w + w1, ch, v]);
      }
    }
    return {
      dist: Infinity,
      parent
    }
  }
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
