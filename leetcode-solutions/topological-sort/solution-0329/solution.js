/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
  let vertexSet = [], edgeSet = {}, visited = {}, stack = [], result = 0, found = {};
  build();
  topSort();
  for (let i = 0; i < stack.length; i++) {
    let current = findNext(stack[i]);
    result = current > result ? current : result;
  }
  return result;
  function build() {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        let current = matrix[i][j];
        let currentKey = i + '_' + j;
        vertexSet.push(currentKey);
        if (matrix[i][j - 1] !== undefined && current < matrix[i][j - 1]) {
          let edge = { start: currentKey, end: i + '_' + (j - 1) };
          edgeSet[currentKey] === undefined ? edgeSet[currentKey] = [edge] : edgeSet[currentKey].push(edge);
        }
        if (matrix[i][j + 1] !== undefined && current < matrix[i][j + 1]) {
          let edge = { start: currentKey, end: i + '_' + (j + 1) };
          edgeSet[currentKey] === undefined ? edgeSet[currentKey] = [edge] : edgeSet[currentKey].push(edge);
        }
        if (matrix[i - 1] && matrix[i - 1][j] !== undefined && current < matrix[i - 1][j]) {
          let edge = { start: currentKey, end: i - 1 + '_' + j };
          edgeSet[currentKey] === undefined ? edgeSet[currentKey] = [edge] : edgeSet[currentKey].push(edge);
        }
        if (matrix[i + 1] && matrix[i + 1][j] !== undefined && current < matrix[i + 1][j]) {
          let edge = { start: currentKey, end: i + 1 + '_' + j };
          edgeSet[currentKey] === undefined ? edgeSet[currentKey] = [edge] : edgeSet[currentKey].push(edge);
        }
      }
    }
  }
  function topSort() {
    for (let i = 0; i < vertexSet.length; i++) {
      if (!visited[vertexSet[i]]) topSortUtil(vertexSet[i]);
    }
  }
  function topSortUtil(current) {
    visited[current] = true;
    for (let i = 0; edgeSet[current] && i < edgeSet[current].length; i++) {
      let endKey = edgeSet[current][i].end;
      if (!visited[endKey]) topSortUtil(endKey);
    }
    stack.unshift(current);
  }
  function findNext(currentKey) {
    if (edgeSet[currentKey] === undefined) return 1;
    if (found[currentKey] !== undefined) return found[currentKey];
    let currentMax = 0;
    for (let i = 0; i < edgeSet[currentKey].length; i++) {
      let current = 1 + findNext(edgeSet[currentKey][i].end);
      currentMax = current > currentMax ? current : currentMax;
    }
    found[currentKey] = currentMax;
    return currentMax;
  }
};

module.exports = { solution: longestIncreasingPath };