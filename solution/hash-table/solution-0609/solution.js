/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
  let hash = {};
  for (let i = 0; i < paths.length; i++) {
    let contents = paths[i].split(' ').slice(1);
    let path = paths[i].split(' ')[0];
    for (let j = 0; j < contents.length; j++) {
      let filename = contents[j].split('(')[0];
      let content = contents[j].split('(')[1].split(')')[0];
      if (hash[content] === undefined) {
        hash[content] = [];
      }
      hash[content].push(path + '/' + filename);
    }
  }
  let result = [];
  for (let key in hash) {
    if (hash[key].length > 1) result.push(hash[key]);
  }
  return result;
};

findDuplicate(["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]);