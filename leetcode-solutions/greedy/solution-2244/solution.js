/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
  let map = {};
  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];
    if (map[task] === undefined) map[task] = 0;
    map[task]++;
  }
  let result = 0;
  for (let k in map) {
    let v = map[k];
    if (v < 2) return -1;
    if (v % 3 === 0) result += v / 3;
    else if (v % 3 === 2) result += Math.floor(v / 3) + 1;
    else if (v % 3 === 1) result += (v - 4) / 3 + 2;
    else return -1;
  }
  return result;
};