/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */
var FoodRatings = function(foods, cuisines, ratings) {
  this.cuisineMap = new Map();
  this.foodMap = new Map();
  for (let i = 0; i < foods.length; i++) {
    let [food, cuisine, rating] = [foods[i], cuisines[i], ratings[i]];
    let heap;
    if (!this.cuisineMap.has(cuisine)) this.cuisineMap.set(cuisine, new Heap((a, b) => {
      if (a[1] !== b[1]) return b[1] - a[1];
      let [aLen, bLen] = [a[0].length, b[0].length];
      let len = Math.min(aLen, bLen);
      for (let i = 0; i < len; i++) {
        let [x, y] = [a[0].charCodeAt(i), b[0].charCodeAt(i)];
        if (x !== y) return x - y;
      }
      return aLen - bLen;
    }));
    heap = this.cuisineMap.get(cuisine);
    heap.heappush([food, rating]);
    this.foodMap.set(food, [cuisine, rating]);
  }
};

/** 
 * @param {string} food 
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function(food, newRating) {
  let { foodMap, cuisineMap } = this;
  let [cuisine, rating] = foodMap.get(food);
  foodMap.set(food, [cuisine, newRating]);
  if (rating !== newRating) {
    let heap = cuisineMap.get(cuisine);
    heap.heappush([food, newRating]);
  }
};

/** 
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function(cuisine) {
  let heap = this.cuisineMap.get(cuisine);
  while (true) {
    let [food, rating] = heap.list[0];
    if (rating !== this.foodMap.get(food)[1]) {
      heap.heappop();
    } else {
      return food;
    }
  }
};

/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
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
