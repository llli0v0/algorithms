var Fancy = function() {
  this.fancy = [];
  this.addMult = 0n;
  this.mult = 1n;
};

/** 
 * @param {number} val
 * @return {void}
 */
Fancy.prototype.append = function(val) {
  this.fancy.push({ initial: BigInt(val), addMult: this.addMult, mult: this.mult });
};

/** 
 * @param {number} inc
 * @return {void}
 */
Fancy.prototype.addAll = function(inc) {
  this.addMult += BigInt(inc);
};

/** 
 * @param {number} m
 * @return {void}
 */
Fancy.prototype.multAll = function(m) {
  this.mult *= BigInt(m);
  this.addMult *= BigInt(m);
};

/** 
 * @param {number} idx
 * @return {number}
 */
Fancy.prototype.getIndex = function(idx) {
  if (idx >= this.fancy.length) return -1;
  let a = this.fancy[idx];
  let mod = 10n**9n + 7n;
  return (a.initial * (this.mult / a.mult) + this.addMult - a.addMult * (this.mult / a.mult)) % mod;
};

/**
 * Your Fancy object will be instantiated and called as such:
 * var obj = new Fancy()
 * obj.append(val)
 * obj.addAll(inc)
 * obj.multAll(m)
 * var param_4 = obj.getIndex(idx)
 */
