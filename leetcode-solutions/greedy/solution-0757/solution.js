/**
 * @param {number[][]} intervals
 * @return {number}
 */
var intersectionSizeTwo = function(intervals) {
  let result = new Set();
  intervals = intervals.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });
  let index = 0;
  while (index < intervals.length) {
    if (intervals[index + 1] && intervals[index][0] <= intervals[index + 1][0] && intervals[index + 1][1] <= intervals[index][1]) {
      intervals.splice(index, 1);
    } else {
      index++;
    }
  }
  intervals = intervals.sort((a, b) => a[1] - b[1]);
  for (let i = 0; i < intervals.length; i++) {
    intervals[i] = { inter: intervals[i], remain: 2 };
  }
  while (intervals.length) {
    let current = intervals.shift();
    if (current.remain === 1) {
      let el = (result.has(current.inter[1]) ? current.inter[1] - 1 : current.inter[1]), index = 0;
      while (intervals[index] && intervals[index].inter[0] <= el && el <= intervals[index].inter[1]) {
        intervals[index].remain--;
        index++;
      }
      result.add(el);
    }
    if (current.remain === 2) {
      let el1 = current.inter[1] - 1, el2 = current.inter[1], index = 0;
      while (intervals[index] && intervals[index].inter[0] <= el2 && el2 <= intervals[index].inter[1]) {
        if (intervals[index].inter[0] <= el1 && el2 <= intervals[index].inter[1]) {
          intervals.splice(index, 1);
          continue;
        }
        if (intervals[index].inter[0] <= el2 && el2 <= intervals[index].inter[1]) {
          intervals[index].remain--;
          index++;
        }
      }
      result.add(el1).add(el2);
    }
  }
  return result.size;
};

console.log(intersectionSizeTwo([[4,7],[5,8],[7,9],[2,6],[0,1],[1,4],[1,9],[0,5],[5,10],[7,8]]));