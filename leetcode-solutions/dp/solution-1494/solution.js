/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number} k
 * @return {number}
 */
var minNumberOfSemesters = function(n, relations, k) {
  let dep = new Array(n).fill(0);
  let dp = new Map();
  let statusdp = new Map();
  for (let i = 0; i < relations.length; i++) {
    let [a, b] = relations[i];
    dep[b - 1] += 1 << (a - 1);
  }
  return helper((1 << n) - 1, dep);

  function helper(peo, dep) {
    if (peo === 0) return 0;
    if (dp.has(peo)) return dp.get(peo);
    let val = Infinity;
    let can = [];
    for (let i = 0; i < dep.length; i++) {
      if (dep[i] === 0) can.push(i);
    }
    if (can.length <= k) {
      let ndep = [...dep];
      let dpeo = 0;
      for (let i = 0; i < can.length; i++) {
        let c = can[i];
        for (let j = 0; j < ndep.length; j++) {
          if ((ndep[j] & (1 << c)) === (1 << c) && ndep[j] !== -1) ndep[j] -= 1 << c;
        }
        dpeo += 1 << c;
        ndep[c] = -1;
      }
      val = 1 + helper(peo - dpeo, ndep);
    } else {
      let status = getStatus(can.length - 1, k);
      for (let i = 0; i < status.length; i++) {
        let sta = status[i];
        let ndep = [...dep];
        let dpeo = 0;
        for (let j = 0; j < can.length; j++) {
          if ((sta & (1 << j)) === (1 << j)) {
            let c = can[j];
            for (let m = 0; m < ndep.length; m++) {
              if ((ndep[m] & (1 << c)) === (1 << c) && ndep[m] !== -1) ndep[m] -= 1 << c;
            }
            dpeo += 1 << c;
            ndep[c] = -1;
          }
        }
        val = Math.min(val, 1 + helper(peo - dpeo, ndep));
      }
    }
    dp.set(peo, val);
    return val;
  }
  
  function getStatus(index, k) {
    if (statusdp.has(index)) return statusdp.get(index);
    let status = [];
    helper(index, 0, 0);
    statusdp.set(index, status);
    return status;
    
    function helper(index, r, c) {
      if (c === k) return status.push(r);
      if (index + 1 < k - c) return;
      for (let i = index; i >= 0; i--) {
        helper(i - 1, r + (1 << i), c + 1);
      }
    }
  }
};
