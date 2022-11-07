/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function(costs, k, candidates) {
  for (let i = 0; i < costs.length; i++) {
    costs[i] = [costs[i], i];
  }
  let compare = (a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  };
  let [h1, h2] = [new Heap(compare), new Heap(compare)];
  let [index1, index2] = [0, costs.length - 1];
  let used = new Set();
  for (; index1 < costs.length && index1 < candidates; index1++) {
    h1.push(costs[index1]);
    used.add(index1);
  }
  for (index2 = costs.length - 1; index2 >= 0 && index2 >= costs.length - candidates; index2--) {
    if (!used.has(index2)) {
      h2.push(costs[index2]);
      used.add(index2);
    }
  }
  let res = 0;
  while (k) {
    let a = h1.list[0] || [Infinity, Infinity];
    let b = h2.list[0] || [Infinity, Infinity];
    if (a[0] === b[0]) {
      res += a[0];
      if (a[1] === b[1]) {
        h1.pop();
        h2.pop();
        if (index1 < costs.length && !used.has(index1)) {
          h1.push(costs[index1]);
          used.add(index1);
        }
        if (index2 >= 0 && !used.has(index2)) {
          h2.push(costs[index2]);
          used.add(index2);
        }
        index1++;
        index2--;
      } else if (a[1] < b[1]) {
        h1.pop();
        if (index1 < costs.length && !used.has(index1)) {
          h1.push(costs[index1]);
          used.add(index1);
        }
        index1++;
      } else {
        h2.pop();
        if (index2 >= 0 && !used.has(index2)) {
          h2.push(costs[index2]);
          used.add(index2);
        }
        index2--;
      }
    } else if (a[0] < b[0]) {
      res += a[0];
      h1.pop();
      if (index1 < costs.length && !used.has(index1)) {
        h1.push(costs[index1]);
        used.add(index1);
      }
      index1++;
    } else {
      res += b[0];
      h2.pop();
      if (index2 >= 0 && !used.has(index2)) {
        h2.push(costs[index2]);
        used.add(index2);
      }
      index2--;
    }
    k--;
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
