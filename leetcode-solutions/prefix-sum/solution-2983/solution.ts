function canMakePalindromeQueries(s: string, queries: number[][]): boolean[] {
  let s1 = s.slice(0, s.length / 2);
  let s2 = s.slice(s.length / 2).split('').reverse().join('');
  let preSum: number[] = [0];
  let ltr1: Map<string, number>[] = [createMap()];
  let ltr2: Map<string, number>[] = [createMap()];
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) {
      preSum.push(preSum[preSum.length - 1] + 1);
    } else {
      preSum.push(preSum[preSum.length - 1]);
    }
    let m1 = new Map(ltr1[ltr1.length - 1]);
    m1.set(s1[i], m1.get(s1[i])! + 1);
    ltr1.push(m1);
    let m2 = new Map(ltr2[ltr2.length - 1]);
    m2.set(s2[i], m2.get(s2[i])! + 1);
    ltr2.push(m2);
  }
  preSum.shift();
  ltr1.shift();
  ltr2.shift();
  let res: boolean[] = [];
  for (let i = 0; i < queries.length; i++) {
    let [a, b, d, c] = queries[i];
    c = s.length - 1 - c;
    d = s.length - 1 - d;
    if (a <= c && b >= d) {
      let ab1 = subtract(ltr1[b], ltr1[a - 1]);
      let ab2 = subtract(ltr2[b], ltr2[a - 1]);
      if (same(0, a - 1) && same(b + 1, s1.length - 1) && equal(ab1, ab2)) {
        res.push(true);
      } else {
        res.push(false);
      }
    } else if (a >= c && b <= d) {
      let cd1 = subtract(ltr1[d], ltr1[c - 1]);
      let cd2 = subtract(ltr2[d], ltr2[c - 1]);
      if (same(0, c - 1) && same(d + 1, s1.length - 1) && equal(cd1, cd2)) {
        res.push(true);
      } else {
        res.push(false);
      }
    } else if (a <= c && b <= d && b >= c) {
      let ab1 = subtract(ltr1[b], ltr1[a - 1]);
      let ac2 = subtract(ltr2[c - 1], ltr2[a - 1]);
      let cb1 = subtract(ab1, ac2);
      let cd2 = subtract(ltr2[d], ltr2[c - 1]);
      let bd1 = subtract(ltr1[d], ltr1[b]);
      let cb2 = subtract(cd2, bd1);
      if (same(0, a - 1) && same(d + 1, s1.length - 1) && equal(cb1, cb2)) {
        res.push(true);
      } else {
        res.push(false);
      }
    } else if (a >= c && b >= d && a <= d) {
      let ab1 = subtract(ltr1[b], ltr1[a - 1]);
      let db2 = subtract(ltr2[b], ltr2[d]);
      let ad1 = subtract(ab1, db2);
      let cd2 = subtract(ltr2[d], ltr2[c - 1]);
      let ca1 = subtract(ltr1[a - 1], ltr1[c - 1]);
      let ad2 = subtract(cd2, ca1);
      if (same(0, c - 1) && same(b + 1, s1.length - 1) && equal(ad1, ad2)) {
        res.push(true);
      } else {
        res.push(false);
      }
    } else {
      let ab1 = subtract(ltr1[b], ltr1[a - 1]);
      let ab2 = subtract(ltr2[b], ltr2[a - 1]);
      let cd1 = subtract(ltr1[d], ltr1[c - 1]);
      let cd2 = subtract(ltr2[d], ltr2[c - 1]);
      if (equal(ab1, ab2) && equal(cd1, cd2)) {
        if (a > d) {
          if (same(0, c - 1) && same(d + 1, a - 1) && same(b + 1, s1.length - 1)) {
            res.push(true);
          } else {
            res.push(false);
          }
        } else {
          if (same(0, a - 1) && same(b + 1, c - 1) && same(d + 1, s1.length - 1)) {
            res.push(true);
          } else {
            res.push(false);
          }
        }
      } else {
        res.push(false);
      }
    }
  }
  return res;

  function same(l, r) {
    if (r < l) return true;
    return preSum[r] - (preSum[l - 1] ?? 0) === r - l + 1;
  }

  function subtract(m1: Map<string, number>, m2: Map<string, number>): Map<string, number> {
    if (m1 === undefined) return createMap();
    if (m2 === undefined) return m1;
    let m = new Map<string, number>();
    for (let [key, val] of m1) {
      m.set(key, val - m2.get(key)!);
    }
    return m;
  }

  function equal(m1: Map<string, number>, m2: Map<string, number>): boolean {
    for (let [key, val] of m1) {
      if (val !== m2.get(key) || val < 0) return false;
    }
    return true;
  }

  function createMap(): Map<string, number> {
    let m = new Map<string, number>();
    for (let i = 97; i < 123; i++) {
      m.set(String.fromCharCode(i), 0);
    }
    return m;
  }
};
