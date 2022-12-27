/**
 * @param {string[]} positive_feedback
 * @param {string[]} negative_feedback
 * @param {string[]} report
 * @param {number[]} student_id
 * @param {number} k
 * @return {number[]}
 */
var topStudents = function(positive_feedback, negative_feedback, report, student_id, k) {
  positive_feedback = new Set(positive_feedback);
  negative_feedback = new Set(negative_feedback);
  let arr = [];
  for (let i = 0; i < report.length; i++) {
    let r = report[i].split(' ');
    let score = 0;
    for (let j = 0; j < r.length; j++) {
      if (positive_feedback.has(r[j])) {
        score += 3;
      } else if (negative_feedback.has(r[j])) {
        score--;
      }
    }
    arr.push([score, student_id[i]]);
  }
  arr.sort((a, b) => {
    if (a[0] !== b[0]) return b[0] - a[0];
    return a[1] - b[1];
  });
  let res = [];
  for (let i = 0; i < k; i++) res.push(arr[i][1]);
  return res;
};
