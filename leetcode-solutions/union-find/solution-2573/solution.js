/**
 * @param {number[][]} lcp
 * @return {string}
 */
var findTheString = function(lcp) {
  let nodes = [];
  for (let i = 0; i < lcp.length; i++) {
    nodes.push(new Node(i));
  }
  let unBind = [];
  for (let i = 0; i < lcp.length; i++) {
    for (let j = 0; j < lcp[i].length; j++) {
      if (i === j && lcp[i][j] !== lcp.length - i) return '';
      if (lcp[i][j]) {
        if (lcp[i][j] > 1) {
          if (!(lcp[i + 1] && lcp[i + 1][j + 1] === lcp[i][j] - 1)) return '';
        } else {
          if (!(lcp[i + 1] === undefined || lcp[i + 1][j + 1] === undefined || lcp[i + 1][j + 1] === 0)) return '';
        }
        let n1 = nodes[i];
        let n2 = nodes[j];
        let n1p = n1.getRoot();
        let n2p = n2.getRoot();
        if (n1p !== n2p) {
          n2p.parent = n1p;
        }
      } else {
        unBind.push([i, j]);
      }
    }
  }
  for (let i = 0; i < unBind.length; i++) {
    let [a, b] = unBind[i];
    let n1 = nodes[a];
    let n2 = nodes[b];
    let n1p = n1.getRoot();
    let n2p = n2.getRoot();
    if (n1p === n2p) return '';
  }
  let setMap = {};
  for (let i = 0; i < nodes.length; i++) {
    let {index} = nodes[i].getRoot();
    setMap[index] = setMap[index] ?? new Set();
    setMap[index].add(i);
  }
  let arr = new Array(lcp.length).fill(undefined);
  let cur = 97;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined) {
      for (let key in setMap) {
        if (setMap[key].has(i)) {
          for (let index of setMap[key]) {
            arr[index] = cur;
          }
          cur++;
        }
      }
    }
  }
  if (cur > 123) return '';
  let res = '';
  for (let i = 0; i < arr.length; i++) {
    res += String.fromCharCode(arr[i]);
  }
  return res;
};

class Node {
  constructor(index) {
    this.index = index;
    this.parent = null;
  }

  getRoot() {
    if (this.parent === null) return this;
    return this.parent.getRoot();
  }
}
