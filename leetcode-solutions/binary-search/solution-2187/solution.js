/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
  let l = 0;
  let r = 10**14;
  while (l < r) {
    let m = Math.floor((l + r) / 2);
    let count = 0;
    for (let i = 0; i < time.length; i++) {
      count += Math.floor(m / time[i]);
    }
    if (count < totalTrips) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return l;
};
