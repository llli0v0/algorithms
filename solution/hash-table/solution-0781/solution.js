/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
  let hash = {};
  let result = 0;
  for (let i = 0; i < answers.length; i++) {
    if (hash[answers[i]] === undefined) {
      hash[answers[i]] = 0;
    }
    hash[answers[i]] += 1;
  }
  for (let key in hash) {
    result = result + Math.ceil(hash[key] / (parseInt(key) + 1)) * (parseInt(key) + 1);
  }
  return result;
};