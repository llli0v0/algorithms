/**
 * @param {number[][]} graph
 * @param {number[]} initial
 * @return {number}
 */
var minMalwareSpread = function(graph, initial) {
  initial = initial.sort((a, b) => a - b);
  let initialObj = {}, currentMinSpread = Infinity, result, V = {};
  let currentSpread = initial.length - 1;
  build();
  if (!Object.keys(V).length) return initial[0];
  findBest();
  return result;
  function build() {
    for (let i = 0; i < initial.length; i++) initialObj[initial[i]] = true;
    for (let i = 0; i < graph.length; i++) {
      for (let j = 0; j < graph.length; j++) {
        if (graph[i][j] && i !== j) {
          if (V[i] === undefined) {
            V[i] = { state: 'B', neighbor: new Set() };
            if (initialObj[i]) V[i].state = 'R';
          }
          if (V[j] === undefined) {
            V[j] = { state: 'B', neighbor: new Set() };
            if (initialObj[j]) V[j].state = 'R';
          }
          V[i].neighbor.add(j);
          V[j].neighbor.add(i);
        }
      }
    }
  }
  function findBest() {
    for (let i = 0; i < initial.length; i++) {
      V[initial[i]] && (V[initial[i]].state = 'D');
      for (let m = 0; m < i; m++) {
        if (V[initial[m]]) spread(initial[m]);
      }
      for (let n = i + 1; n < initial.length; n++) {
        if (V[initial[n]]) spread(initial[n]);
      }
      V[initial[i]] && (V[initial[i]].state = 'R');
      if (currentSpread < currentMinSpread) {
        currentMinSpread = currentSpread;
        result = initial[i];
      }
      clean();
    }
  }
  function spread(v) {
    let stack = [...V[v].neighbor];
    while (stack.length) {
      let key = stack.pop();
      let current = V[key];
      if (current.state === 'B') {
        currentSpread++;
        stack = stack.concat([...current.neighbor]);
        current.state = 'R';
      }
    }
  }
  function clean() {
    for (let key in V) {
      if (!initialObj[key]) V[key].state = 'B';
    }
    currentSpread = initial.length - 1;
  }
};