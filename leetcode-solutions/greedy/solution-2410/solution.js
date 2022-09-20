/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function(players, trainers) {
  players.sort((a, b) => a - b);
  trainers.sort((a, b) => a - b);
  let p1 = 0;
  let p2 = 0;
  let res = 0;
  while (p1 < players.length && p2 < trainers.length) {
    if (players[p1] <= trainers[p2]) {
      res++;
      p1++;
      p2++;
    } else {
      p2++;
    }
  }
  return res;
};
