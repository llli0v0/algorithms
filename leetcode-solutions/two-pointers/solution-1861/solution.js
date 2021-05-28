/**
 * @param {character[][]} box
 * @return {character[][]}
 */
 var rotateTheBox = function(box) {
  for (let i = 0; i < box.length; i++) {
    let l = box[i].length - 1;
    let r = box[i].length - 1;
    for (let j = box[i].length - 1; j >= 0; j--) {
      if (/\*/.test(box[i][j])) {
        l = r = j - 1;
      } else if (/#/.test(box[i][j])) {
        [box[i][l], box[i][r]] = [box[i][r], box[i][l]];
        l--;
        r--;
      } else l--;
    }
  }
  let result = new Array(box[0].length).fill(null).map(() => []);
  for (let i = box.length - 1; i >= 0; i--) {
    for (let j = 0; j < box[i].length; j++) {
      result[j].push(box[i][j]);
    }
  }
  return result;
};
