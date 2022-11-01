/**
 * @param {string[]} creators
 * @param {string[]} ids
 * @param {number[]} views
 * @return {string[][]}
 */
var mostPopularCreator = function(creators, ids, views) {
  let viewMap = {};
  let creatorMap = {};
  let max = 0;
  let maxCreators = new Set();
  for (let i = 0; i < creators.length; i++) {
    let [creator, id, view] = [creators[i], ids[i], views[i]];
    if (creatorMap[creator] === undefined) creatorMap[creator] = 0;
    let val = creatorMap[creator] += view;
    if (val > max) {
      max = val;
      maxCreators = new Set([creator]);
    } else if (val === max) {
      maxCreators.add(creator);
    }
    if (viewMap[creator] === undefined) viewMap[creator] = { max: 0, ids: [] };
    let m = viewMap[creator].max;
    if (view > m) {
      viewMap[creator].max = view;
      viewMap[creator].ids = [id];
    } else if (view === m) {
      viewMap[creator].ids.push(id);
    }
  }
  let res = [];
  for (let creator of maxCreators) {
    let ids = viewMap[creator].ids;
    ids.sort((a, b) => {
      let len = Math.min(a.length, b.length);
      for (let i = 0; i < len; i++) {
        let [x, y] = [a.charCodeAt(i), b.charCodeAt(i)];
        if (x !== y) return x - y;
      }
      return a.length - b.length;
    });
    res.push([creator, ids[0]]);
  }
  return res;
};
