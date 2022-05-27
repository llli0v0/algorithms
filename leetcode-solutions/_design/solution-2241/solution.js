var ATM = function() {
  this.map = { 20: 0, 50: 0, 100: 0, 200: 0, 500: 0 };
};

/** 
 * @param {number[]} banknotesCount
 * @return {void}
 */
ATM.prototype.deposit = function(banknotesCount) {
  this.map[20] += banknotesCount[0];
  this.map[50] += banknotesCount[1];
  this.map[100] += banknotesCount[2];
  this.map[200] += banknotesCount[3];
  this.map[500] += banknotesCount[4];
};

/** 
 * @param {number} amount
 * @return {number[]}
 */
ATM.prototype.withdraw = function(amount) {
  let result = [];
  let arr = [500, 200, 100, 50, 20];
  for (let i = 0; i < arr.length; i++) {
    let a = arr[i];
    result.unshift(Math.min(Math.floor(amount / a), this.map[a]));
    amount -= Math.min(Math.floor(amount / a), this.map[a]) * a;
  }
  if (amount) return [-1];
  this.map[20] -= result[0];
  this.map[50] -= result[1];
  this.map[100] -= result[2];
  this.map[200] -= result[3];
  this.map[500] -= result[4];
  return result;
};

/**
 * Your ATM object will be instantiated and called as such:
 * var obj = new ATM()
 * obj.deposit(banknotesCount)
 * var param_2 = obj.withdraw(amount)
 */