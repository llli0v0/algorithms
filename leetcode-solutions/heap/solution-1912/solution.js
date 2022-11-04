/**
 * @param {number} n
 * @param {number[][]} entries
 */
var MovieRentingSystem = function(n, entries) {
  let comparetorRent = (a, b) => {
    if (a[2] !== b[2]) return a[2] - b[2];
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  };
  this.rentHeap = new Heap(comparetorRent);
  this.movieMap = new Map();
  this.rentMap = new Map();
  let comparetorMovie = (a, b) => {
    if (a[2] !== b[2]) return a[2] - b[2];
    return a[0] - b[0];
  }
  let { movieMap } = this;
  for (let i = 0; i < entries.length; i++) {
    let entrie = [shop, movie, price] = entries[i];
    if (!movieMap.has(movie)) movieMap.set(movie, new Heap(comparetorMovie));
    movieMap.get(movie).heappush(entrie);
    let key = `${shop} ${movie}`;
    this.rentMap.set(key, { val: entrie, rent: false });
  }
};

/** 
 * @param {number} movie
 * @return {number[]}
 */
MovieRentingSystem.prototype.search = function(movie) {
  let heap = this.movieMap.get(movie);
  let res = [];
  if (heap) {
    let count = 5;
    let recycle = [];
    let set = new Set();
    while (count && heap.list.length) {
      let item = heap.heappop();
      let [shop, movie, price] = item;
      let key = `${shop} ${movie}`;
      if (!this.rentMap.get(key).rent && !set.has(key)) {
        set.add(key);
        recycle.push(item);
        res.push(shop);
        count--;
      }
    }
    for (let i = 0; i < recycle.length; i++) heap.heappush(recycle[i]);
  }
  return res;
};

/** 
 * @param {number} shop 
 * @param {number} movie
 * @return {void}
 */
MovieRentingSystem.prototype.rent = function(shop, movie) {
  let key = `${shop} ${movie}`;
  let { rentMap, rentHeap } = this;
  let { val, rent } = rentMap.get(key);
  if (!rent) {
    rentHeap.heappush(val);
    rentMap.set(key, { val, rent: true });
  }
};

/** 
 * @param {number} shop 
 * @param {number} movie
 * @return {void}
 */
MovieRentingSystem.prototype.drop = function(shop, movie) {
  let key = `${shop} ${movie}`;
  let { rentMap, movieMap } = this;
  let { val } = rentMap.get(key);
  rentMap.set(key, { val, rent: false });
  movieMap.get(movie).heappush(val);
};

/**
 * @return {number[][]}
 */
MovieRentingSystem.prototype.report = function() {
  let count = 5;
  let { rentHeap, rentMap } = this;
  let { list } = rentHeap;
  let recycle = [];
  let res = [];
  let set = new Set();
  while (count && list.length) {
    let [shop, movie, price] = item = rentHeap.heappop();
    let key = `${shop} ${movie}`;
    if (rentMap.get(key).rent && !set.has(key)) {
      set.add(key);
      recycle.push(item);
      res.push([shop, movie]);
      count--;
    }
  }
  for (let i = 0; i < recycle.length; i++) rentHeap.heappush(recycle[i]);
  return res;
};

/**
 * Your MovieRentingSystem object will be instantiated and called as such:
 * var obj = new MovieRentingSystem(n, entries)
 * var param_1 = obj.search(movie)
 * obj.rent(shop,movie)
 * obj.drop(shop,movie)
 * var param_4 = obj.report()
 */

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

  heappush(item) {
    let { list, getParentIndex } = this;
    list.push(item);
    let index = list.length - 1;
    let pIndex = getParentIndex(index);
    while (pIndex >= 0 && this.biggerThan(list[pIndex], list[index])) {
      let temp = list[pIndex];
      list[pIndex] = list[index];
      list[index] = temp;
      index = pIndex;
      pIndex = getParentIndex(index);
    }
  }

  heappop() {
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
