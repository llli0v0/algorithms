/**
 * @param {number[]} grades
 * @return {number}
 */
var maximumGroups = function(grades) {
  let res = 1;
  grades.sort((a, b) => a - b);
  let cur1 = grades[0];
  let cur2 = 1;
  let sum = 0;
  let count = 0;
  for (let i = 1; i < grades.length; i++) {
    sum += grades[i];
    count++;
    if (sum > cur1 && count > cur2) {
      res++;
      cur1 = sum;
      cur2 = count;
      sum = 0;
      count = 0;
    }
  }
  return res;
};
