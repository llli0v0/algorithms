/**
 * @param {number[]} jobs
 * @param {number} k
 * @return {number}
 */
var minimumTimeRequired = function(jobs, k) {
  let result = Infinity;
  for (let i = 0; i < 2**jobs.length; i++) {
    let s = i.toString(2);
    s = new Array(jobs.length - s.length).fill(0).join('') + s;
    let c = 0;
    let people = [];
    let beLeft = [];
    let max = 0;
    for (let j = 0; j < s.length; j++) if (s[j] === '1') {
      c++;
      people.push(jobs[j]);
      max = Math.max(max, jobs[j]);
    } else {
      beLeft.push(jobs[j]);
    }
    if (c === k) {
      helper(people, beLeft, max);
    }
  }
  return result;

  function helper(people, beLeft, max) {
    if (max > result) return;
    if (!beLeft.length) return result = Math.min(result, max);
    let nextLeft = beLeft.slice(1);
    for (let i = 0; i < people.length; i++) {
      let cpPeople = people.slice();
      cpPeople[i] += beLeft[0];
      helper(cpPeople, nextLeft, Math.max(max, cpPeople[i]));
    }
  }
};