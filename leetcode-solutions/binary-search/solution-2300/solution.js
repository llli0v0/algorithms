/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
  potions.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < spells.length; i++) {
    let a = spells[i];
    let n = success / a;
    if (n <= potions[0]) {
      res.push(potions.length);
      continue;
    } else if (n > potions[potions.length - 1]) {
      res.push(0);
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
    res.push(potions.length - l);
  }
  return res;
};
