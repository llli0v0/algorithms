function Dijkstra(graph, startPoint) {
  let shortestDistance = {};
  for (let key in graph) {
    shortestDistance[key] = Infinity;
  }
  shortestDistance[startPoint] = 0;

  let visited = new Set();
  visited.add(startPoint);

  // Best implementation is to use the heap to manage the next to obtain vertices, I will go after optimization
  let vertexCount = Object.keys(shortestDistance).length;
  let computeTimes = vertexCount - 1;
  while (computeTimes > 0) {
    let currentVertex;
    let minDistance = Infinity;

    // To find the most short distance
    for (let key in shortestDistance) {
      if (!visited.has(key) && shortestDistance[key] < minDistance) {
        currentVertex = key;
        minDistance = shortestDistance[key];
      }
    }

    // Update the shortest distance
    for (let key in graph[currentVertex]) {
      let dis = shortestDistance[currentVertex] + graph[currentVertex][key];
      if (dis < shortestDistance[key]) {
        shortestDistance[key] = dis;
      }
    }
    visited.add(currentVertex);
    computeTimes--;
  }
  
  return shortestDistance;
}

let graph = {
  1: {
    2: 7,
    3: 9,
    6: 14
  },
  2: {
    1: 7,
    3: 10,
    4: 15
  },
  3: {
    1: 9,
    2: 10,
    4: 11,
    6: 2
  },
  4: {
    2: 15,
    3: 11,
    5: 6
  },
  5: {
    4: 6,
    6: 9
  },
  6: {
    1: 14,
    3: 2,
    5: 9
  }
}

console.log(Dijkstra(graph, 1));