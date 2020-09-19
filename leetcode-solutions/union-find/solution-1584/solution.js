/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
  let M = {};
  let edges = [];
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      edges.push({
        point: [points[i], points[j]],
        len: Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1])
      });
    }
  }
  edges.sort((a, b) => a.len - b.len);
  let result = 0;
  while (edges.length) {
    let edge = edges.shift();
    let point1Key = edge.point[0].toString();
    let point2Key = edge.point[1].toString();
    if (M[point1Key] && M[point2Key] && M[point1Key].root === M[point2Key].root) continue;
    if (M[point1Key] === undefined) M[point1Key] = new Node(point1Key);
    if (M[point2Key] === undefined) M[point2Key] = new Node(point2Key);
    M[point2Key].root.size += M[point1Key].root.size;
    M[point1Key].root.rootNode = M[point2Key].root;
    result += edge.len;
    if (M[point2Key].root.size === points.length) break;
  }
  return result;
};

class Node {
  constructor(key) {
    this.rootNode = null;
    this.key = key;
    this.size = 1;
  }
  get root() {
    if (this.rootNode === null) return this;
    return this.rootNode.root;
  }
}