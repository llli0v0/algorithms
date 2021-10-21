/**
 * @param {string} s
 * @param {number[]} answers
 * @return {number}
 */
var scoreOfStudents = function(s, answers) {
  let dp = {};
  helper(0, s.length - 1);
  let cases = dp[`0 ${s.length - 1}`];
  let right = eval(s);
  let result = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === right) result += 5;
    else if (cases.has(answers[i])) result += 2;
  }
  return result;

  function helper(a, b) {
    if (a === b) return new Set([parseInt(s[a])]);
    let key = `${a} ${b}`;
    if (dp[key] !== undefined) return dp[key];
    dp[key] = new Set();
    for (let i = a; i <= b; i++) {
      if (/[*+]/.test(s[i])) {
        let l = helper(a, i - 1);
        let r = helper(i + 1, b);
        for (let m of l) {
          for (let n of r) {
            if (s[i] === '*') dp[key].add(m * n);
            else dp[key].add(m + n);
          }
        }
      }
    }
    return dp[key];
  }
};