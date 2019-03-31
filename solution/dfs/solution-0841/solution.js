/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
  let keys = [...rooms[0]];
  let ari = new Set();
  ari.add(0);
  while (keys.length) {
    let key = keys.pop();
    if (ari.has(key)) continue;
    ari.add(key);
    for (let i = 0; i < rooms[key].length; i++) {
      keys.push(rooms[key][i]);
    }
  }
  if (ari.size < rooms.length) return false;
  return true;
};