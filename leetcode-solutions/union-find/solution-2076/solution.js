/**
 * @param {number} n
 * @param {number[][]} restrictions
 * @param {number[][]} requests
 * @return {boolean[]}
 */
var friendRequests = function(n, restrictions, requests) {
  let unionFind = {};
  for (let i = 0; i < n; i++) {
    unionFind[i] = new Node(i);
  }
  let result = new Array(requests.length);
  for (let i = 0; i < requests.length; i++) {
    let [a, b] = requests[i];
    let ap = unionFind[a].getBelong();
    let bp = unionFind[b].getBelong();
    let can = true;
    for (let j = 0; j < restrictions.length; j++) {
      let [c, d] = restrictions[j];
      let cp = unionFind[c].getBelong();
      let dp = unionFind[d].getBelong();
      if (ap === cp && bp === dp || ap === dp && bp === cp) {
        can = false;
        break;
      }
    }
    if (can) {
      if (ap !== bp) bp.parent = ap;
      result[i] = true;
    } else {
      result[i] = false;
    }
  }
  return result;
};

class Node {
  constructor(val) {
    this.val = val;
    this.parent = null;
  }

  getBelong() {
    if (this.parent === null) return this;
    return this.parent.getBelong();
  }
}