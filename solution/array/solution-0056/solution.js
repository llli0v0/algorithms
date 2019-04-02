/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  intervals = intervals.sort((a, b) => {
    if (a.start > b.start) {
      return 1;
    } else if (a.start < b.start) {
      return -1;
    } else {
      return 0;
    }
  });
  let result = [];
  while (intervals.length) {
    let el = intervals.shift();
    while (intervals.length && intervals[0].start <= el.end) {
      let h = intervals.shift();
      if (el.end >= h.end) continue;
      el.end = h.end;
    }
    result.push(el);
  }
  return result;
};