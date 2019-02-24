/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, N) {
  let history = {}, cur = cells, next = [], num = 1, allLen = N;
  while (N > 0 && history[cur.join('')] === undefined) {
    for (let i = 0; i < cur.length; i++) {
      if (i === 0) {
        next.push(0);
      } else if (i === 7) {
        next.push(0);
      } else if (cur[i - 1] === 0 && cur[i + 1] === 0 || cur[i - 1] === 1 && cur[i + 1] === 1) {
        next.push(1);
      } else {
        next.push(0);
      }
    }
    history[cur.join('')] = num;
    cur = next;
    next = [];
    N -= 1;
    num += 1;
  }
  if (history[cur.join('')] === undefined) return cur;
  let res = (allLen - history[cur.join('')] + 1) % (num - history[cur.join('')]);
  let resMap = {};
  for (let key in history) {
    if (history[key] >= history[cur.join('')]) {
      resMap[history[key] - history[cur.join('')]] = key;
    }
  }
  return resMap[res].split('');
};