/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
  let C = new Array(n).fill(0);

  for (let i = 0; i < bookings.length; i++) {
    bookings[i][0] -= 1;
    bookings[i][1] -= 1;
    C[bookings[i][0]] += bookings[i][2];
    if (bookings[i][1] + 1 < C.length) C[bookings[i][1] + 1] -= bookings[i][2];
  }

  let A = C[0];

  for (let i = 1; i < C.length; i++) {
    A += C[i];
    C[i] = A;
  }

  return C;
};