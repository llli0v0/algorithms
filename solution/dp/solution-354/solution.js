/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  let envelopesWithIndex = [];
  let cache = {};
  for (let i = 0; i < envelopes.length; i++) {
    envelopesWithIndex.push({ index: i, width: envelopes[i][0], height: envelopes[i][1], include: 0 });
  }
  let sortByWidth = [...envelopesWithIndex].sort((a, b) => {
    if (a.width === b.width) return a.height - b.height;
    return a.width - b.width;
  });
  let sortByHeight = [...envelopesWithIndex].sort((a, b) => {
    if (a.height === b.height) return a.width - b.width;
    return a.height - b.height;
  });
  for (let i = 0; i < sortByWidth.length; i++) {
    let heightIndex = findHeightIndex(sortByWidth[i].height, sortByWidth[i].width);
    sortByHeight[heightIndex].include = 1 + getMaxBeforeCurrent(heightIndex);
  }
  function findHeightIndex(height, width) {
    let current = Math.floor(envelopes.length / 2);
    let currentIndex = current;
    while (true) {
      current = Math.floor(current / 2) || 1;
      if (sortByHeight[currentIndex].height < height) {
        currentIndex += current;
      } else if (sortByHeight[currentIndex].height > height) {
        currentIndex -= current;
      } else if (sortByHeight[currentIndex].width < width) {
        currentIndex++;
      } else if (sortByHeight[currentIndex].width > width) {
        currentIndex--;
      } else {
        return currentIndex;
      }
    }
  }
  function getMaxBeforeCurrent(index) {
    if (cache[index] !== undefined) return cache[index];
    let currentMax = 0;
    for (let i = index - 1; i >= 0; i--) {
      if (sortByHeight[index].width === sortByHeight[i].width || sortByHeight[index].height === sortByHeight[i].height) continue;
      sortByHeight[i].include > currentMax && (currentMax = sortByHeight[i].include);
    }
    cache[index] = currentMax;
    return currentMax;
  }
  let result = 0;
  for (let i = 0; i < sortByHeight.length; i++) {
    sortByHeight[i].include > result && (result = sortByHeight[i].include);
  }
  return result;
};

module.exports = { solution: maxEnvelopes };