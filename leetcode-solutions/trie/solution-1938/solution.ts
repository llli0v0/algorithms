function maxGeneticDifference(parents: number[], queries: number[][]): number[] {
  class TNode {
    _0: TNode | null;
    _1: TNode | null;
    cnt0: number;
    cnt1: number;
    level: number;
    constructor(level = 17) {
      this._0 = null;
      this._1 = null;
      this.cnt0 = 0;
      this.cnt1 = 0;
      this.level = level;
    }

    insert(val: number): void {
      let n = 1 << this.level;
      if (val & n) {
        this.cnt1++;
        if (this.level > 0) {
          if (!this._1) this._1 = new TNode(this.level - 1);
          this._1.insert(val - n);
        }
      } else {
        this.cnt0++;
        if (this.level > 0) {
          if (!this._0) this._0 = new TNode(this.level - 1);
          this._0.insert(val);
        }
      }
    }

    remove(val: number): void {
      let n = 1 << this.level;
      if (val & n) {
        this.cnt1--;
        if (!this.cnt1) this._1 = null;
        else this._1!.remove(val - n);
      } else {
        this.cnt0--;
        if (!this.cnt0) this._0 = null;
        else this._0!.remove(val);
      }
    }

    match(val: number): number {
      let res = 0;
      if (!this.cnt0 && !this.cnt1) return res;
      let n = 1 << this.level;
      if (val & n) {
        if (this.cnt0) {
          res += n;
          if (this.level) res += this._0!.match(val - n);
        } else {
          if (this.level) res += this._1!.match(val - n);
        }
      } else {
        if (this.cnt1) {
          res += n;
          if (this.level) res += this._1!.match(val);
        } else {
          if (this.level) res += this._0!.match(val);
        }
      }
      return res;
    }
  }

  let qs = new Map<number, number[][]>();
  for (let i = 0; i < queries.length; i++) {
    let query = queries[i];
    let [node, val] = query;
    if (!qs.has(node)) qs.set(node, []);
    qs.get(node)!.push([val, i]);
  }
  let tree: number[][] = new Array(parents.length).fill(null).map(() => []);
  let root!: number;
  for (let i = 0; i < parents.length; i++) {
    let [p, n] = [parents[i], i];
    if (p !== -1) tree[p].push(n);
    if (p === -1) root = n;
  }
  let res = new Array(queries.length).fill(0);
  let tRoot = new TNode();
  dfs(root);
  return res;

  function dfs(nd: number) {
    tRoot.insert(nd);
    if (qs.has(nd)) {
      for (let q of qs.get(nd)!) {
        let [v, idx] = q;
        res[idx] = (tRoot.match(v));
      }
    }
    for (let ch of tree[nd]) dfs(ch);
    tRoot.remove(nd);
  }
};
