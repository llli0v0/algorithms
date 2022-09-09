/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function(n, meetings) {
  meetings.sort((a, b) => a[0] - b[0]);
  let counter = new Array(n).fill(0);
  let rooms = [];
  for (let i = 0; i < meetings.length; i++) {
    let [start, end] = meetings[i];
    if (!rooms.length) {
      rooms.push(new Room(0, end));
      counter[0]++;
    } else if (start < rooms[0].end) {
      if (rooms.length < n) {
        counter[rooms.length]++;
        rooms.push(new Room(rooms.length, end));
      } else {
        rooms[0].end = rooms[0].end + end - start;
        counter[rooms[0].key]++;
      }
    } else {
      let change = rooms[0];
      for (let j = 1; j < rooms.length; j++) {
        if (rooms[j].end <= start && rooms[j].key < change.key) change = rooms[j];
      }
      change.end = end;
      counter[change.key]++;
    }
    rooms.sort((a, b) => {
      if (a.end === b.end) return a.key - b.key;
      return a.end - b.end;
    });
  }
  let curMax = 0;
  let res = 0;
  for (let i = 0; i < counter.length; i++) {
    if (counter[i] > curMax) {
      res = i;
      curMax = counter[i];
    }
  }
  return res;
};

class Room {
  constructor(key, end) {
    this.key = key;
    this.end = end;
  }
}
