var FreqStack = function() {
  let self = FreqStack;
  self.countMap = {};
  self.numberMap = {};
  self.maxCount = 0;
  self.allSN = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function(x) {
  let self = FreqStack;
  let last;
  if (self.numberMap[x] === undefined || self.numberMap[x] === 0) {
    self.numberMap[x] = 1;
    last = { number: x, indexs: [self.allSN] };
  } else {
    let index = self.countMap[self.numberMap[x]].findIndex(i => i.number === x);
    last = self.countMap[self.numberMap[x]].splice(index, 1)[0];
    last.indexs.push(self.allSN);
    self.numberMap[x] = self.numberMap[x] + 1;
  }
  if (self.countMap[self.numberMap[x]] === undefined) {
    self.countMap[self.numberMap[x]] = [];
  }
  self.countMap[self.numberMap[x]].push(last);
  self.numberMap[x] > self.maxCount && (self.maxCount = self.numberMap[x]);
  self.allSN++;
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
  let self = FreqStack;
  let arr = self.countMap[self.maxCount];
  let result = arr[arr.length - 1].number;
  let popEle = arr.pop();
  popEle.indexs.pop();
  self.numberMap[popEle.number] = self.numberMap[popEle.number] - 1;
  let numberCount = self.numberMap[popEle.number];
  if (self.numberMap[popEle.number] !== 0) {
    if (self.countMap[numberCount] === undefined) {
      self.countMap[numberCount] = [popEle];
    } else {
      self.countMap[numberCount].push(popEle);
    }
    self.countMap[numberCount].sort((a, b) => a.indexs[a.indexs.length - 1] - b.indexs[b.indexs.length - 1]);
  }
  while (self.countMap[self.maxCount].length === 0 || self.countMap[self.maxCount].length === undefined) {
    self.maxCount--;
    if (self.maxCount === 0) break;
  }
  return result;
};

module.exports = { solution: FreqStack };