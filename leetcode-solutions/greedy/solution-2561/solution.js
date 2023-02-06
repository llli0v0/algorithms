/**
 * @param {number[]} basket1
 * @param {number[]} basket2
 * @return {number}
 */
var minCost = function(basket1, basket2) {
  let counter1 = {};
  let counter2 = {};
  let counter = {};
  let min = Infinity;
  for (let i = 0; i < basket1.length; i++) {
    let [a, b] = [basket1[i], basket2[i]];
    counter[a] = (counter[a] ?? 0) + 1;
    counter[b] = (counter[b] ?? 0) + 1;
    counter1[a] = (counter1[a] ?? 0) + 1;
    counter2[b] = (counter2[b] ?? 0) + 1;
    min = Math.min(min, a, b);
  }
  for (let val of Object.values(counter)) {
    if (val % 2) return -1;
  }
  for (let key in counter1) {
    let [a, b] = [counter1[key], counter2[key]];
    if (a && b) {
      if (a === b) {
        delete counter1[key];
        delete counter2[key];
      } else if (a > b) {
        counter1[key] -= counter2[key];
        delete counter2[key];
      } else {
        counter2[key] -= counter1[key];
        delete counter1[key];
      }
    }
  }
  let newBasket1 = [];
  for (let key in counter1) newBasket1.push([Number(key), counter1[key]]);
  newBasket1.sort((a, b) => a[0] - b[0]);
  let newBasket2 = [];
  for (let key in counter2) newBasket2.push([Number(key), counter2[key]]);
  newBasket2.sort((a, b) => b[0] - a[0]);
  let res = 0;
  let [index1, index2] = [0, 0];
  while (index1 < newBasket1.length) {
    let [a, b] = [newBasket1[index1], newBasket2[index2]];
    res += Math.min(a[0], b[0], 2 * min);
    a[1] -= 2;
    b[1] -= 2;
    if (a[1] === 0) index1++;
    if (b[1] === 0) index2++;
  }
  return res;
};
