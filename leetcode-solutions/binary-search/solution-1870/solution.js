/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
  let l = 0;
  let r = 10**8;
  while (l < r) {
    let m = Math.floor((l + r) / 2);
    let time = 0;
    for (let i = 0; i < dist.length; i++) {
      if (i === dist.length - 1) time += dist[i] / m;
      else time += Math.ceil(dist[i] / m);
      if (time > hour) break;
    }
    if (time > hour) l = m + 1;
    else r = m;
  }
  return l === 10**8 ? -1 : l;
};
