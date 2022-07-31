/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
  for (let i = 0; i < spells.length; i++) spells[i] = [spells[i], i];
  spells.sort((a, b) => a[0] - b[0]);
  potions.sort((a, b) => a - b);
  let res = new Array(spells.length);
  for (let i = 0; i < spells.length; i++) {
    let [a, b] = spells[i];
    let n = success / a;
    if (n <= potions[0]) {
      res[b] = potions.length;
      continue;
    } else if (n > potions[potions.length - 1]) {
      res[b] = 0;
      continue;
    }
    let l = 0;
    let r = potions.length - 1;
    while (l < r) {
      let m = Math.floor((l + r) / 2);
      if (potions[m] < n) {
        l = m + 1;
      } else {
        r = m;
      }
    }
    res[b] = potions.length - l;
  }
  return res;
};
