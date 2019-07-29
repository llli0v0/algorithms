class Node {
  constructor() {
    this.belong = null;
  }

  getBelong() {
    if (!this.belong) return this;

    return this.belong.getBelong();
  }
}

function kurskal(paths, N) {
  paths = paths.sort((a, b) => a[2] - b[2]);

  let M = {};
  let MST = [];

  while (N - 1) {
    let path = paths.shift();

    if (M[path[0]] === undefined) M[path[0]] = new Node();
    if (M[path[1]] === undefined) M[path[1]] = new Node();

    if (M[path[0]].getBelong() !== M[path[1]].getBelong()) {
      M[path[0]].belong = M[path[1]].getBelong();

      MST.push(path);

      N--;
    }
  }

  return MST;
}