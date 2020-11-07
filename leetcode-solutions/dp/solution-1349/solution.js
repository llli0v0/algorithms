/**
 * @param {character[][]} seats
 * @return {number}
 */
var maxStudents = function(seats) {
  let badSeats = [];
  let allCase = 2**seats[0].length - 1;
  for (let i = 0; i < seats.length; i++) {
    let badSeat = 0;
    for (let j = 0; j < seats[i].length; j++) {
      if (seats[i][j] === '#') badSeat += (1 << j);
    }
    badSeats.push(badSeat);
  }
  let computed = {};
  return helper(seats.length - 1, badSeats[seats.length - 1]);

  function helper(rowIndex, canNot) {
    if (rowIndex < 0) return 0;
    let key = `${rowIndex} ${canNot}`;
    if (computed[key] !== undefined) return computed[key];
    computed[key] = 0;
    for (let i = 0; i <= allCase; i++) {
      if ((i & canNot) === 0) {
        let s = Number(i).toString(2);
        let count = 0;
        for (let j = 0; j < s.length; j++) {
          if (s[j] === '1') {
            if (s[j] === s[j + 1]) continue;
            count++;
          }
        }
        let nextCanNot = badSeats[rowIndex - 1];
        for (let j = 0; j < seats[0].length; j++) {
          if (((1 << j) & i) === (1 << j)) {
            nextCanNot = nextCanNot | (j - 1 >= 0 ? (1 << (j - 1)) : 0);
            nextCanNot = nextCanNot | (j + 1 <= seats[0].length - 1 ? (1 << (j + 1)) : 0);
          }
        }
        computed[key] = Math.max(computed[key], helper(rowIndex - 1, nextCanNot) + count);
      }
    }
    return computed[key];
  }
};