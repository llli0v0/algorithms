/**
 * @param {number[][]} blocked
 * @param {number[]} source
 * @param {number[]} target
 * @return {boolean}
 */
var isEscapePossible = function(blocked, source, target) {
  let C = 2 * 10**4;

  let L = 10**6 - 1;

  let B = new Set();
  for (let i = 0; i < blocked.length; i++) {
    B.add(blocked[i].join());
  }

  return helper(source, true) && helper(target, false);

  function helper(p, f) {
    let c = C;

    let V = new Set();

    let A = [p];
    let N = [];

    while (A.length && c) {
      let a = A.pop();

      if (!V.has(a.join())) {
        c--;
        V.add(a.join());

        if (f && a[0] === target[0] && a[1] === target[1]) {
          return true;
        } else if (!f && a[0] === source[0] && a[1] === source[1]) {
          return true;
        }

        if (a[0] + 1 <= L && !B.has([a[0] + 1, a[1]].join())) N.push([a[0] + 1, a[1]]);
        if (a[0] - 1 >= 0 && !B.has([a[0] - 1, a[1]].join())) N.push([a[0] - 1, a[1]]);
        if (a[1] + 1 <= L && !B.has([a[0], a[1] + 1].join())) N.push([a[0], a[1] + 1]);
        if (a[1] - 1 >= 0 && !B.has([a[0], a[1] - 1].join())) N.push([a[0], a[1] - 1]);
      }

      if (!A.length) {
        A = N;
        N = [];
      }
    }

    if (c > 0) return false;
    return true;
  }
};