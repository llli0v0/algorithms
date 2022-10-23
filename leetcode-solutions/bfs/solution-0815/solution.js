/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function(routes, source, target) {
  if (source === target) return 0;
  let routeMap = new Map();
  let arr = [];
  for (let i = 0; i < routes.length; i++) {
    let route = routes[i];
    for (let j = 0; j < route.length; j++) {
      let r = route[j];
      if (!routeMap.has(r)) routeMap.set(r, []);
      if (r === source) arr.push(i);
      routeMap.get(r).push(i);
    }
  }
  let next = new Set();
  let visited = new Set();
  let res = 1;
  while (arr.length) {
    for (let i = 0; i < arr.length; i++) {
      let a = arr[i];
      if (!visited.has(a)) {
        visited.add(a);
        let route = routes[a];
        for (let m = 0; m < route.length; m++) {
          let r = route[m];
          if (r === target) return res;
          let ar = routeMap.get(r);
          for (let n = 0; n < ar.length; n++) next.add(ar[n]);
        }
      }
    }
    res++;
    arr = Array.from(next);
    next = new Set();
  }
  return -1;
};
