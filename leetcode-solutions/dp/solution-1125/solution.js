/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
var smallestSufficientTeam = function(req_skills, people) {
  let computed = {};
  let skillMap = {};
  let need = 0;
  for (let i = 0; i < req_skills.length; i++) {
    skillMap[req_skills[i]] = 1 << i;
    need += (1 << i);
  }
  return dp(need);

  function dp(need) {
    if (need === 0) return [];
    if (computed[need] !== undefined) return computed[need];
    computed[need] = new Array(61);
    for (let i = 0; i < people.length; i++) {
      let p = people[i];
      let cur = need;
      for (let j = 0; j < p.length; j++) {
        let skill = p[j];
        if ((need & skillMap[skill]) === skillMap[skill]) {
          cur -= skillMap[skill];
        }
      }
      let curRes = [i].concat(dp(cur));
      computed[need] = computed[need].length > curRes.length ? curRes : computed[need];
    }
    return computed[need];
  }
};
