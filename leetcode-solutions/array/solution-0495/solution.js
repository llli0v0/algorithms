/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  for (let i = 0; i < timeSeries.length; i++) {
    timeSeries[i] = [timeSeries[i], timeSeries[i] + duration];
  }
  let he = [];
  while (timeSeries.length) {
    let me = timeSeries.shift();
    while (timeSeries.length && timeSeries[0][0] <= me[1]) {
      let h = timeSeries.shift();
      if (me[1] >= h[1]) continue;
      me[1] = h[1];
    }
    he.push(me);
  }
  let result = 0;
  for (let i = 0; i < he.length; i++) {
    result = result + he[i][1] - he[i][0];
  }
  return result;
};