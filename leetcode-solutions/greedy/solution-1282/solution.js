/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
  let M = {};

  for (let i = 0; i < groupSizes.length; i++) {
    let k = groupSizes[i];

    if (M[k] === undefined) M[k] = [[]];
    
    if (M[k][M[k].length - 1].length === k) M[k].push([]);

    M[k][M[k].length - 1].push(i);
  }

  let result = [];

  for (let k in M) {
    result = result.concat(M[k]);
  }

  return result;
};