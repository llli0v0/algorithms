/**
 * @param {number[]} stations
 * @param {number} K
 * @return {number}
 */
var minmaxGasDist = function(stations, K) {
  let L = 0;
  let R = 0;

  for (let i = 1; i < stations.length; i++) R = Math.max(R, stations[i] - stations[i - 1]);

  while (R - L > 0.000001) {
    let M = (L + R) / 2;

    let a = 0;

    for (let i = 1; i < stations.length; i++) {
      a += Math.ceil((stations[i] - stations[i - 1]) / M) - 1;
    }

    if (a <= K) {
      R = M;
    } else {
      L = M + 0.000001;
    }
  }

  return L;
};
