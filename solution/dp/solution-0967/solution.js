/**
 * @param {number} N
 * @param {number} K
 * @return {number[]}
 */
var numsSameConsecDiff = function(N, K) {
  if (N === 1) return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let tree = {
    1: { val: 1, tol: '1', next: {} },
    2: { val: 2, tol: '2', next: {} },
    3: { val: 3, tol: '3', next: {} },
    4: { val: 4, tol: '4', next: {} },
    5: { val: 5, tol: '5', next: {} },
    6: { val: 6, tol: '6', next: {} },
    7: { val: 7, tol: '7', next: {} },
    8: { val: 8, tol: '8', next: {} },
    9: { val: 9, tol: '9', next: {} }
  };
  let queue = [], nextQueue = [], ans = [];
  for (let key in tree) {
    queue.push(tree[key]);
  }
  for (let i = 1; i < N; i++) {
    for (let j = 0; j < queue.length; j++) {
      let sml = queue[j].val - K, big = queue[j].val + K;
      if (sml >= 0 && sml <= 9) {
        queue[j].next[sml] = { val: sml, tol: queue[j].tol + sml, next: {} };
        nextQueue.push(queue[j].next[sml]);
        i === N - 1 && (ans.push(parseInt(queue[j].next[sml].tol)));
      }
      if (big >= 0 && big <= 9 && big !== sml) {
        queue[j].next[big] = { val: big, tol: queue[j].tol + big, next: {} };
        nextQueue.push(queue[j].next[big]);
        i === N - 1 && (ans.push(parseInt(queue[j].next[big].tol)));
      }
    }
    queue = [...nextQueue];
    nextQueue = [];
  }
  return ans;
};

console.log(numsSameConsecDiff(2, 0));