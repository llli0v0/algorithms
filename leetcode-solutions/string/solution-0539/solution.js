/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  timePoints = timePoints.sort(
    (a, b) => {
      if (a.slice(0, 2) > b.slice(0, 2)) {
        return 1;
      } else if (a.slice(0, 2) < b.slice(0, 2)) {
        return -1;
      } else {
        if (a.slice(3) > b.slice(3)) {
          return 1;
        } else if (a.slice(3) < b.slice(3)) {
          return -1;
        } else {
          return 0;
        }
      }
    }
  );
  let result = (23 - parseInt(timePoints[timePoints.length - 1].slice(0, 2))) * 60 + parseInt(timePoints[0].slice(0, 2)) * 60 + 60 - parseInt(timePoints[timePoints.length - 1].slice(3)) + parseInt(timePoints[0].slice(3));
  for (let i = 1; i < timePoints.length; i++) {
    result = Math.min(result, (parseInt(timePoints[i].slice(0, 2)) - parseInt(timePoints[i - 1].slice(0, 2))) * 60 + parseInt(timePoints[i].slice(3)) - parseInt(timePoints[i - 1].slice(3)));
  }
  return result;
};