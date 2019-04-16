/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
var videoStitching = function(clips, T) {
  clips = clips.sort((a, b) => a[0] - b[0]);
  if (clips[0][0] > 0) return -1;
  let newClips = [clips[0]];
  for (let i = 1; i < clips.length; i++) {
    if (newClips[newClips.length - 1][1] >= T) break;
    if (clips[i][0] !== newClips[newClips.length - 1][0]) {
      if (clips[i][0] > newClips[newClips.length - 1][1]) return -1;
      if (clips[i][1] > newClips[newClips.length - 1][1]) newClips.push(clips[i]);
    } else {
      if (clips[i][1] > newClips[newClips.length - 1][1]) newClips[newClips.length - 1][1] = clips[i][1];
    }
  }
  if (newClips[newClips.length - 1][1] < T) return -1;
  let clipmap = {};
  for (let i = 0; i < newClips.length; i++) {
    clipmap[newClips[i][0]] = newClips[i][1];
  }
  let current = [0, clipmap[0]];
  let result = 1;
  while (current[1] < T) {
    let best = [0, current[1]];
    for (let i = current[0]; i <= current[1]; i++) {
      if (clipmap[i] > current[1]) {
        best = [i, clipmap[i]];
      }
    }
    current = best;
    result++;
  }
  return result;
};