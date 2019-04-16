/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
  if (intervals.length === 0) return [newInterval];
  class Interval {
    constructor(start, end) {
      this.start = start;
      this.end = end;
    }
  }
  let pipeline = [];
  if (newInterval.end < intervals[0].start) {
    intervals.unshift(newInterval)
    return intervals;
  }
  if (newInterval.start > intervals[intervals.length - 1].end) {
    intervals.push(newInterval)
    return intervals;
  }
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i + 1] && newInterval.start > intervals[i].end && newInterval.end < intervals[i + 1].start) {
      intervals.splice(i + 1, 0, newInterval);
      return intervals;
    }
    if (intervals[i].start === newInterval.start && intervals[i].end === newInterval.end) return intervals;
    if (intervals[i + 1] && intervals[i].end === newInterval.start && intervals[i + 1].start === newInterval.end) {
      intervals.splice(i, 2, new Interval(intervals[i].start, intervals[i + 1].end));
    }
    if (intervals[i].start >= newInterval.start && intervals[i].end <= newInterval.end) {
      pipeline.push({ index: i, type: 'all' });
    }
    if (
      intervals[i].start < newInterval.start &&
      intervals[i].end <= newInterval.end &&
      intervals[i].end >= newInterval.start
    ) {
      pipeline.push({ index: i, type: 'font' });
    }
    if (
      intervals[i].start <= newInterval.end &&
      intervals[i].start >= newInterval.start &&
      intervals[i].end > newInterval.end
    ) {
      pipeline.push({ index: i, type: 'back' });
    }
  }
  let swapInterval = new Interval(null, null);
  if (pipeline.length !== 0) {
    for (let i = 0; i < pipeline.length; i++) {
      if (i === 0) {
        if (pipeline[i].type === 'all' || pipeline[i].type === 'back') {
          swapInterval.start = newInterval.start;
        } else {
          swapInterval.start = intervals[pipeline[i].index].start;
        }
      }
      if (i === pipeline.length - 1) {
        if (pipeline[i].type === 'all' || pipeline[i].type === 'font') {
          swapInterval.end = newInterval.end;
        } else {
          swapInterval.end = intervals[pipeline[i].index].end;
        }
      }
    }
    intervals.splice(pipeline[0].index, pipeline.length, swapInterval);
  }
  return intervals;
};