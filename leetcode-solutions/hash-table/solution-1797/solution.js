/**
 * @param {number} timeToLive
 */
 var AuthenticationManager = function(timeToLive) {
  this.timeToLive = timeToLive;
  this.tokens = {};
};

/** 
 * @param {string} tokenId 
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.generate = function(tokenId, currentTime) {
  this.tokens[tokenId] = currentTime;
};

/** 
 * @param {string} tokenId 
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.renew = function(tokenId, currentTime) {
  if (this.tokens[tokenId] !== undefined && currentTime - this.tokens[tokenId] < this.timeToLive) {
    this.tokens[tokenId] = currentTime;
  }
};

/** 
 * @param {number} currentTime
 * @return {number}
 */
AuthenticationManager.prototype.countUnexpiredTokens = function(currentTime) {
  let result = 0;
  for (let key in this.tokens) {
    if (currentTime - this.tokens[key] < this.timeToLive) result++;
  }
  return result;
};

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */
