/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
  let timeMap = {};
  for (let i = 0; i < time.length; i++) {
    if (timeMap[time[i]] === undefined) timeMap[time[i]] = [];
    timeMap[time[i]].push(i);
  }
  let S = [60, 120, 180, 240, 300, 360, 420, 480, 540, 600, 660, 720, 780, 840, 900, 960];
  let result = 0;
  for (let i = 0; i < time.length; i++) {
    for (let j = 0; j < S.length; j++) {
      let x = timeMap[S[j] - time[i]];
      if (x) {
        for (let m = 0; m < x.length; m++) {
          if (x[m] > i) result++;
        }
      }
    }
  }
  return result;
};