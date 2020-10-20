/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function(scores, ages) {
  let person = [];
  for (let i = 0; i < scores.length; i++) {
    person.push({ age: ages[i], score: scores[i] });
  }
  person.sort((a, b) => {
    if (a.age === b.age) return a.score - b.score;
    return a.age - b.age;
  });
  let computed = new Array(person.length);
  for (let i = 0; i < computed.length; i++) {
    computed[i] = person[i].score;
  }
  for (let i = 1; i < person.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (person[i].age > person[j].age && person[i].score < person[j].score) continue;
      computed[i] = Math.max(computed[i], person[i].score + computed[j]);
    }
  }
  return Math.max(...computed);
};