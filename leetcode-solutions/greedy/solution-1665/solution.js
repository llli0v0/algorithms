/**
 * @param {number[][]} tasks
 * @return {number}
 */
 var minimumEffort = function(tasks) {
  tasks.sort((a, b) => (b[1] - b[0]) - (a[1] - a[0]));
  let result = 0;
  for (let i = tasks.length - 1; i >= 0; i--) {
    result = Math.max(tasks[i][1], result + tasks[i][0]);
  }
  return result;
};
