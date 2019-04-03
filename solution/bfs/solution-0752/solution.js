/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  let dial = {
    0: { next: 1, pre: 9 },
    1: { next: 2, pre: 0 }, 2: { next: 3, pre: 1 }, 3: { next: 4, pre: 2 },
    4: { next: 5, pre: 3 }, 5: { next: 6, pre: 4 }, 6: { next: 7, pre: 5 },
    7: { next: 8, pre: 6 }, 8: { next: 9, pre: 7 }, 9: { next: 0, pre: 8 }
  }
  let dead = new Set(deadends);
  let ale = new Set();
  let current = ['0000'];
  let next = [];
  let result = 0;
  while (current.length) {
    let cur = current.shift();
    if (cur === target) return result;
    if (!dead.has(cur) && !ale.has(cur)) {
      ale.add(cur);
      for (let i = 0; i < cur.length; i++) {
        next.push(cur.slice(0, i) + dial[cur[i]].next + cur.slice(i + 1));
        next.push(cur.slice(0, i) + dial[cur[i]].pre + cur.slice(i + 1));
      }
    }
    if (current.length === 0) {
      current = next;
      next = [];
      result++;
    }
  }
  return -1;
};