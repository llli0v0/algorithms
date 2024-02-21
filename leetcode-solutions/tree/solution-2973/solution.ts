function placedCoins(edges: number[][], cost: number[]): number[] {
  let edgemp = new Map<number, number[]>();
  class Node {
    val: number;
    children: Node[];
    fa: number;
    constructor(val: number, fa: number = -1) {
      this.val = val;
      this.children = [];
      this.fa = fa;
      this.build();
    }

    build() {
      let chs = edgemp.get(this.val);
      for (let ch of chs ?? []) {
        if (ch === this.fa) continue;
        this.children.push(new Node(ch, this.val));
      }
    }
  }

  for (let edge of edges) {
    let [a, b] = edge;
    if (!edgemp.has(a)) edgemp.set(a, []);
    if (!edgemp.has(b)) edgemp.set(b, []);
    edgemp.get(a)!.push(b);
    edgemp.get(b)!.push(a);
  }
  let root = new Node(0);
  let res = new Array(cost.length).fill(0);
  solve(root);
  return res;
  
  interface SolveRes {
    count: number,
    max: number[],
    min: number[]
  }
  function solve(node: Node): SolveRes {
    let count = 1;
    let max: number[] = [];
    let min: number[] = [];
    for (let ch of node.children) {
      let res = solve(ch);
      count += res.count;
      max = max.concat(res.max);
      min = min.concat(res.min);
    }
    let co = cost[node.val];
    if (co > 0) {
      max.push(co);
    } else {
      min.push(co);
    }
    max = max.sort((a, b) => b - a).slice(0, 3);
    min = min.sort((a, b) => a - b).slice(0, 2);
    let ans = 0;
    if (max.length === 3) ans = Math.max(ans, max[0] * max[1] * max[2]);
    if (min.length === 2 && max.length > 0) ans = Math.max(ans, max[0] * min[0] * min[1]);
    if (count < 3) ans = 1;
    res[node.val] = ans;
    return {
      count,
      min,
      max
    };
  }
};
