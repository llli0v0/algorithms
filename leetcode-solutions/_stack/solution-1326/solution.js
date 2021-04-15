/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {
  let sections = [];
  for (let i = 0; i < ranges.length; i++) {
    let cur = ranges[i];
    if (cur > 0) sections.push([i - cur < 0 ? 0 : i - cur, i + cur > n ? n : i + cur]);
  }
  sections.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });
  for (let i = sections.length - 1; i >= 0; i--) {
    if (sections[i - 1] && sections[i - 1][1] === sections[i][1]) sections.splice(i, 1);
  }
  let stack = [];
  for (let i = 0; i < sections.length; i++) {
    let sec = sections[i];
    while (
      (stack.length > 1 && stack[stack.length - 1][1] >= sec[0] && stack[stack.length - 2][1] >= sec[0]) ||
      (stack.length && stack[stack.length - 1][0] >= sec[0])
    ) stack.pop();
    stack.push(sec);
  }
  for (let i = 1; i < stack.length; i++) if (stack[i][0] > stack[i - 1][1]) return -1;
  if (stack.length === 0 || stack[0][0] > 0) return -1;
  else if (stack[stack.length - 1][1] < n) return -1;
  return stack.length;
};