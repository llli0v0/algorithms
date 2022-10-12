/**
 * @param {number[]} nums
 * @param {number[][]} edges
 * @return {number}
 */
var minimumScore = function(nums, edges) {
  let map = {};
  for (let i = 0; i < edges.length; i++) {
    let [a, b] = edges[i];
    map[a] = map[a] ?? [];
    map[b] = map[b] ?? [];
    map[a].push(b);
    map[b].push(a);
  }
  let root = new Node(nums[edges[0][0]], edges[0][0]);
  let tree = { [edges[0][0]]: root };
  build(edges[0][0], root);
  let res = Infinity;
  for (let i = 0; i < edges.length; i++) {
    for (let j = i + 1; j < edges.length; j++) {
      let [a, b] = edges[i];
      let [c, d] = edges[j];
      let aNode = tree[a], bNode = tree[b], cNode = tree[c], dNode = tree[d];
      let p1, c1, p2, c2;
      if (aNode.parent === bNode) {
        p1 = bNode;
        c1 = aNode;
      } else {
        p1 = aNode;
        c1 = bNode;
      }
      if (cNode.parent === dNode) {
        p2 = dNode;
        c2 = cNode;
      } else {
        p2 = cNode;
        c2 = dNode;
      }
      let counter1, counter2, counter3;
      if (p1 === c2) {
        counter1 = c1.counter;
        counter2 = subtraction(p1.counter, c1.counter);
        counter3 = subtraction(root.counter, c2.counter);
      } else if (p2 === c1) {
        counter1 = c2.counter;
        counter2 = subtraction(c1.counter, c2.counter);
        counter3 = subtraction(root.counter, c1.counter);
      } else if (c1.deep < p2.deep) {
        let p = p2;
        let f = false;
        while (p) {
          if (p.parent === c1) {
            f = true;
            break;
          }
          p = p.parent;
        }
        if (f) {
          counter1 = c2.counter;
          counter2 = subtraction(c1.counter, c2.counter);
          counter3 = subtraction(root.counter, c1.counter);
        } else {
          counter1 = c1.counter;
          counter2 = c2.counter;
          counter3 = subtraction(subtraction(root.counter, counter1), counter2);
        }
      } else if (c2.deep < p1.deep) {
        let p = p1;
        let f = false;
        while (p) {
          if (p.parent === c2) {
            f = true;
            break;
          }
          p = p.parent;
        }
        if (f) {
          counter1 = c1.counter;
          counter2 = subtraction(c2.counter, c1.counter);
          counter3 = subtraction(root.counter, c2.counter);
        } else {
          counter1 = c1.counter;
          counter2 = c2.counter;
          counter3 = subtraction(subtraction(root.counter, counter1), counter2);
        }
      } else {
        counter1 = c1.counter;
        counter2 = c2.counter;
        counter3 = subtraction(subtraction(root.counter, counter1), counter2);
      }
      let max = 0, min = Infinity;
      [counter1, counter2, counter3].forEach(item => {
        let val = 0;
        for (let i = 0; i < item.length; i++) {
          if (item[i] % 2) {
            val += 1 << i;
          }
        }
        max = Math.max(max, val);
        min = Math.min(min, val);
      });
      res = Math.min(res, max - min);
    }
  }
  return res;

  function subtraction(counter1, counter2) {
    let res = [];
    for (let i = 0; i < counter1.length; i++) {
      res[i] = counter1[i] - counter2[i];
    }
    return res;
  }
  
  function build(index, parent) {
    let children = map[index];
    for (let i = 0; i < children.length; i++) {
      let idx = children[i];
      if (tree[idx]) continue;
      let node = new Node(nums[idx], idx);
      tree[idx] = node;
      node.parent = parent;
      node.deep = parent.deep + 1;
      parent.children.push(node);
      build(idx, node);
      for (let i = 0; i < node.counter.length; i++) {
        parent.counter[i] += node.counter[i];
      }
    }
  }
};

class Node {
  constructor(val, index) {
    this.index = index;
    this.counter = new Array(28);
    this.parent = null;
    this.deep = 0;
    this.children = [];
    for (let i = 0; i < 28; i++) {
      if (((1 << i) & val) === (1 << i)) {
        this.counter[i] = 1;
      } else {
        this.counter[i] = 0;
      }
    }
  }
}
