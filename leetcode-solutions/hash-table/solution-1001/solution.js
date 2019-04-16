/**
 * @param {number} N
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
var gridIllumination = function(N, lamps, queries) {
  let xlamps = {}, ylamps = {}, lolamps = {}, rolamps = {}, allLamps = {};
  for (let i = 0; i < lamps.length; i++) {
    let current = lamps[i];
    let subKey = current[0] + '-' + current[1];
    allLamps[subKey] = true;
    xlamps[current[0]] === undefined && (xlamps[current[0]] = {});
    xlamps[current[0]][subKey] = true;
    ylamps[current[1]] === undefined && (ylamps[current[1]] = {});
    ylamps[current[1]][subKey] = true;
    lolamps[current[1] - current[0]] === undefined && (lolamps[current[1] - current[0]] = {});
    lolamps[current[1] - current[0]][subKey] = true;
    rolamps[current[0] + current[1]] === undefined && (rolamps[current[0] + current[1]] = {});
    rolamps[current[0] + current[1]][subKey] = true;
  }
  let ans = [];
  for (let i = 0; i < queries.length; i++) {
    let current = queries[i];
    if (xlamps[current[0]] || ylamps[current[1]] || lolamps[current[1] - current[0]] || rolamps[current[0] + current[1]]) {
      ans.push(1);
      let needClean = [
        [current[0] - 1, current[1] - 1],
        [current[0] + 1, current[1] + 1],
        [current[0] - 1, current[1] + 1],
        [current[0] + 1, current[1] - 1],
        [current[0] - 1, current[1]],
        [current[0] + 1, current[1]],
        [current[0], current[1] - 1],
        [current[0], current[1] + 1]
      ];
      for (let j = 0; j < needClean.length; j++) {
        cleanAround(needClean[j]);
      }
    } else {
      ans.push(0);
    }
  }
  function cleanAround(target) {
    let key = target[0] + '-' + target[1];
    if (allLamps[key]) {
      delete xlamps[target[0]][key];
      if (Object.keys(xlamps[target[0]]).length === 0) delete xlamps[target[0]];
      delete ylamps[target[1]][key];
      if (Object.keys(ylamps[target[1]]).length === 0) delete ylamps[target[1]];
      delete lolamps[target[1] - target[0]][key];
      if (Object.keys(lolamps[target[1] - target[0]]).length === 0) delete lolamps[target[1] - target[0]];
      delete rolamps[target[0] + target[1]][key];
      if (Object.keys(rolamps[target[0] + target[1]]).length === 0) delete rolamps[target[0] + target[1]];
    }
    delete allLamps[key];
  }
  return ans;
};

console.log(gridIllumination(5, [[0,0],[4,4]], [[1,1],[1,0]]));