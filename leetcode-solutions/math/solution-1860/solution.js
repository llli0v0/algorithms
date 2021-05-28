/**
 * @param {number} memory1
 * @param {number} memory2
 * @return {number[]}
 */
var memLeak = function(memory1, memory2) {
  let time = 1;
  while (time <= memory1 || time <= memory2) {
    if (memory1 >= memory2) {
      memory1 -= time;
    } else memory2 -= time;
    time++;
  }
  return [time, memory1, memory2];
};
