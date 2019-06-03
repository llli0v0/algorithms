class RandomizedSet {
  constructor() {
    this.count = 0;
    this.valMap = {};
    this.countMap = {};
  }

  insert(val) {
    if (this.valMap[val] !== undefined) return false;
    this.count++;
    this.valMap[val] = this.count;
    this.countMap[this.count] = val;
    return true;
  }

  remove(val) {
    if (this.valMap[val] === undefined) return false;
    if (this.countMap[val] !== this.count) {
      this.countMap[this.valMap[val]] = this.countMap[this.count];
      this.valMap[this.countMap[this.count]] = this.valMap[val];
      delete this.countMap[this.count];
      delete this.valMap[val];
    }
    delete this.countMap[this.count];
    delete this.valMap[val];
    this.count--;
    return true;
  }

  getRandom() {
    return this.countMap[parseInt(Math.random() * (this.count) + 1)];
  }
}

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

let r = new RandomizedSet();
r.insert(1);
r.insert(10);
r.insert(20);
r.insert(30);
let el = {1: 0, 10: 0, 20: 0, 30: 0};
for (let i = 0; i < 10000; i++) {
  let key = r.getRandom();
  el[key]++;
}
console.log(el);