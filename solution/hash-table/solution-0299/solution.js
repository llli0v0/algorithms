/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  let right = 0;
  let WA = {}, WB = {};
  let wrong = 0;
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      right++;
    } else {
      if (WA[secret[i]] === undefined) {
        WA[secret[i]] = 0;
      }
      if (WB[guess[i]] === undefined) {
        WB[guess[i]] = 0;
      }
      WA[secret[i]]++;
      WB[guess[i]]++;
    }
  }
  for (let i = 0; i < 10; i++) {
    if (WA[i] && WB[i]) {
      wrong = wrong + Math.min(WA[i], WB[i]);
    }
  }
  return right + 'A' + wrong + 'B';
};