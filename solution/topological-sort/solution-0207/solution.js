/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  let graph = {};
  let incomming = {};
  let nocomming = [];
  for (let i = 0; i < numCourses; i++) {
    incomming[i] = 0;
  }
  for (let i = 0; i < prerequisites.length; i++) {
    if (graph[prerequisites[i][0]] === undefined) {
      graph[prerequisites[i][0]] = new Set();
    }
    incomming[prerequisites[i][1]]++;
    graph[prerequisites[i][0]].add(prerequisites[i][1]);
  }
  for (let key in incomming) {
    if (incomming[key] === 0) {
      nocomming.push(key);
    }
  }
  let result = 0;
  while (nocomming.length) {
    let cur = nocomming.shift();
    result++;
    if (graph[cur] !== undefined) {
      for (let key of graph[cur]) {
        incomming[key]--;
        if (incomming[key] === 0) {
          nocomming.push(key);
        }
      }
    }
  }
  return result === numCourses;
};