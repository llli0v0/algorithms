/**
 * @param {number} n
 * @param {number[][]} meetings
 * @param {number} firstPerson
 * @return {number[]}
 */
var findAllPeople = function(n, meetings, firstPerson) {
  let timeMap = {};
  for (let i = 0; i < meetings.length; i++) {
    let [a, b, time] = meetings[i];
    let map = timeMap[time] || (timeMap[time] = { members: [] });
    let aNode = map[a] || (map[a] = new Node(a));
    let bNode = map[b] || (map[b] = new Node(b));
    let aBelong = aNode.getBelong();
    let bBelong = bNode.getBelong();
    if (aBelong !== bBelong) {
      bBelong.parent = aBelong;
      aBelong.chs.push(bBelong.val);
    }
    map.members.push(a);
    map.members.push(b);
  }
  let know = new Set([0, firstPerson]);
  let handled = new Set();
  for (let time = 0, limit = 10**5 + 1; time < limit; time++) {
    if (timeMap[time]) {
      let { members } = timeMap[time];
      for (let i = 0; i < members.length; i++) {
        let mem = members[i];
        let root = timeMap[time][mem].getBelong();
        let key = `${time} ${root.val}`;
        if (know.has(mem) && !handled.has(key)) {
          handled.add(key);
          traverse(root, timeMap[time]);
        }
      }
    }
  }
  return Array.from(know).sort((a, b) => a - b);

  function traverse(node, map) {
    know.add(node.val);
    node.chs.length && node.chs.forEach(n => traverse(map[n], map));
  }
};

class Node {
  constructor(val) {
    this.val = val;
    this.parent = null;
    this.chs = [];
  }

  getBelong() {
    if (this.parent === null) return this;
    return this.parent.getBelong();
  }
}