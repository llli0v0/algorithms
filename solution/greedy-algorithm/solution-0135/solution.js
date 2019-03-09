/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  if (!ratings.length) return 0;
  let result = 0;
  for (let i = 0; i < ratings.length; i++) {
    ratings[i] = { score: ratings[i], count: null };
  }
  ratings[0].count = 1;
  for (let i = 1; i < ratings.length; i++) {
    ratings[i].count = 1;
    if (ratings[i].score > ratings[i - 1].score) ratings[i].count = ratings[i - 1].count + 1;
    let current = i;
    while (current > 0 && ratings[current - 1].score > ratings[current].score && ratings[current - 1].count <= ratings[current].count) {
      ratings[current - 1].count++;
      if (ratings[current - 1].count > ratings[current].count) current--;
    }
  }
  for (let i = 0; i < ratings.length; i++) {
    result += ratings[i].count;
  }
  return result;
};

console.log(candy([2,3,1,0,0,1,3,1,3,2,1]));