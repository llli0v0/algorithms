/**
 * @param {character[]} keys
 * @param {string[]} values
 * @param {string[]} dictionary
 */
var Encrypter = function(keys, values, dictionary) {
  this.encryptMap = {};
  this.decryptMap = {};
  this.dictionary = dictionary;
  for (let i = 0; i < keys.length; i++) {
    this.encryptMap[keys[i]] = values[i];
    let val = values[i];
    if (this.decryptMap[val] === undefined) this.decryptMap[val] = [];
    this.decryptMap[val].push(keys[i]);
  }
};

/** 
 * @param {string} word1
 * @return {string}
 */
Encrypter.prototype.encrypt = function(word1) {
  let result = '';
  for (let i = 0; i < word1.length; i++) {
    result += this.encryptMap[word1[i]];
  }
  return result;
};

/** 
 * @param {string} word2
 * @return {number}
 */
Encrypter.prototype.decrypt = function(word2) {
  let arr = [];
  for (let i = 0; i < word2.length; i += 2) {
    let vals = this.decryptMap[word2.slice(i, i + 2)];
    if (!vals) return 0;
    arr.push(vals);
  }
  let result = 0;
  for (let i = 0; i < this.dictionary.length; i++) {
    if (this.dictionary[i].length !== word2.length / 2) continue;
    for (let j = 0; j < this.dictionary[i].length; j++) {
      let a = arr[j];
      if (a.every(item => item !== this.dictionary[i][j])) break;
      if (j === this.dictionary[i].length - 1) result++;
    }
  }
  return result;
};

/**
 * Your Encrypter object will be instantiated and called as such:
 * var obj = new Encrypter(keys, values, dictionary)
 * var param_1 = obj.encrypt(word1)
 * var param_2 = obj.decrypt(word2)
 */
