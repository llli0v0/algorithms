/**
 * @param {string} text
 * @return {number}
 */
var distinctEchoSubstrings = function(text) {
  let mod = 10n**13n + 7n;
  let strSet = new Set();
  for (let i = 1; i <= text.length / 2; i++) {
    let s = 0n;
    let strMap = {};
    for (let j = 0; j < i; j++) s = (s * 26n + BigInt(text.charCodeAt(j) - 97)) % mod;
    strMap[i - 1] = s;
    let a = 1n;
    for (let j = 0; j < i - 1; j++) a = a * 26n % mod;
    for (let j = 1; j + i - 1 < text.length; j++) {
      strMap[j + i - 1] = (
        (strMap[j + i - 2] + mod * 26n - BigInt(text.charCodeAt(j - 1) - 97) * a) * 26n +
        BigInt(text.charCodeAt(j + i - 1) - 97)
      ) % mod;
      if (strMap[j - 1] !== undefined && strMap[j + i - 1] === strMap[j - 1]) strSet.add(`${i} ${strMap[j - 1]}`);
    }
  }
  return strSet.size;
};
