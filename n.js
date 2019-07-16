/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
var smallestSufficientTeam = function(req_skills, people) {
  let A = [];

  for (let i = 0; i < people.length; i++) {
    if (people[i].indexOf(req_skills[0]) !== -1) {
      A.push([new Set([i]), new Set(people[i])]);
    }
  }

  req_skills.shift();

  let N = [];

  while (req_skills.length) {
    let req = req_skills.shift();

    while (A.length) {
      let a = A.shift();
      
      if (a[1].has(req)) {
        let b = [new Set(a[0]), new Set(a[1])];

        N.push(b);
      } else {
        for (let i = 0; i < people.length; i++) {
          if (!a[0].has(i) && people[i].indexOf(req) !== -1) {
            let b = [new Set(a[0]), new Set(a[1])];

            b[0].add(i);

            for (let j = 0; j < people[i].length; j++) {
              b[1].add(people[i][j]);
            }

            N.push(b);
          }
        }
      }
    }

    A = N;
    N = [];
  }

  let result = A[0][0];

  for (let i = 1; i < A.length; i++) {
    if (result.size > A[i][0].size) {
      result = A[i][0];
    }
  }

  return [...result];
};