/**
 * @param {number[][][]} schedule
 * @return {number[][]}
 */
var employeeFreeTime = function(schedule) {
  let A = [[-Infinity, Infinity]];
  let S = [];
  for (let i = 0; i < schedule.length; i++) {
    for (let j = 0; j < schedule[i].length; j++) {
      S.push(schedule[i][j]);
    }
  }
  schedule = S;
  for (let i = 0; i < schedule.length; i++) {
    let B = [];
    for (let j = 0; j < A.length; j++) {
      if (A[j][0] < schedule[i].start && schedule[i].end < A[j][1]) {
        B.push([A[j][0], schedule[i].start]);
        B.push([schedule[i].end, A[j][1]]);
      } else if (schedule[i].start <= A[j][0] && schedule[i].end >= A[j][0] && schedule[i].end < A[j][1]) {
        B.push([schedule[i].end, A[j][1]]);
      } else if (A[j][0] < schedule[i].start && schedule[i].start <= A[j][1] && A[j][1] <= schedule[i].end) {
        B.push([A[j][0], schedule[i].start]);
      } else if (A[j][1] <= schedule[i].start || A[j][0] >= schedule[i].end) {
        B.push(A[j]);
      }
    }
    A = B;
  }
  let result = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i][0] > 0 - 10**9 &&  A[i][1] < 10**9) {
      result.push({ start: A[i][0], end: A[i][1] });
    }
  }
  return result;
};