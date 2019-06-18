const Heap = require('../../../data-structures/heap/binary-heap/binary-heap');

/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function(target, startFuel, stations) {
  let heap = new Heap();
  let result = 0;
  while (stations.length) {
    while (stations.length && stations[0][0] <= startFuel) heap.heappush(-stations.shift()[1]);
    while (stations.length && startFuel < stations[0][0] || !stations.length && startFuel < target) {
      if (!heap.heap.length) return -1;
      startFuel -= heap.heappop();
      result++;
    }
  }
  if (startFuel >= target) return result;
  return -1;
};