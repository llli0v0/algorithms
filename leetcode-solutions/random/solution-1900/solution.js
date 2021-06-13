/**
 * @param {number} n
 * @param {number} firstPlayer
 * @param {number} secondPlayer
 * @return {number[]}
 */
 var earliestAndLatest = function(n, firstPlayer, secondPlayer) {
  let arr = [];
  for (let i = 0; i < n; i++) arr.push(i + 1);
  let min = 14;
  let max = 0;
  let count = 0
  while (count < 1000) {
    random(arr, 0);
    count++;
  }
  return [min, max];

  function random(arr, times) {
    if (arr.length <= 1) return;
    let l = [];
    let r = [];
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
      let a = arr[i];
      let b = arr[arr.length - 1 - i];
      if (a === firstPlayer && b === secondPlayer) {
        min = Math.min(min, times + 1);
        max = Math.max(max, times + 1);
        return;
      } else if (a === firstPlayer || a === secondPlayer) {
        l.push(a);
      } else if (b === firstPlayer || b === secondPlayer) {
        r.unshift(b);
      } else {
        let rand = Math.random();
        if (rand < 0.5) l.push(a);
        else r.unshift(a);
      }
    }
    random(arr.length % 2 ? l.concat([arr[Math.floor(arr.length / 2)]]).concat(r) : l.concat(r), times + 1);
  }
};
